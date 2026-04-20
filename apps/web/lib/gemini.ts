// lib/gemini.ts — Gemini AI conversational client for civic complaint extraction

import { CHILD_CATEGORIES } from "./categories";

/** Shape of a single conversation message */
export interface ChatMessage {
  role: "user" | "model";
  text: string;
}

/** Structured complaint data extracted by Gemini */
export interface ExtractedComplaint {
  title: string;
  child_id: number; // 1-42 integer from the taxonomy
  issue_type: string; // Human readable name for the UI
  severity: string;
  description: string;
  confidence: number;
  candidates?: number[]; // Top-3 alternative child_ids if confidence < 0.7
}

/** Shape returned from Gemini: either a reply or an extraction */
export interface GeminiResponse {
  reply: string;
  extracted: ExtractedComplaint | null;
}

const GEMINI_REQUEST_TIMEOUT_MS = 20000;

const CATEGORY_LIST_TEXT = Object.entries(CHILD_CATEGORIES)
  .map(([id, cat]) => `${id}: ${cat.name}`)
  .join("\n");

const SYSTEM_PROMPT = `You are JanSamadhan AI, a helpful civic complaint assistant for Delhi municipal services.
Your job: have a short, friendly conversation with the citizen to collect ALL required fields for their complaint summary, then output structured JSON.

REQUIRED FIELDS:
- title (5-10 word summary)
- child_id (Select the most appropriate ID from the category list below)
- severity (Low, Medium, High, or Critical)
- description (2-3 sentences)
- confidence (float between 0 and 1)

VALID CATEGORIES (ID: Name):
${CATEGORY_LIST_TEXT}

CIVIC FOCUS & SAFETY RULES:
1. Greet warmly on the first message. Ask what issue they want to report.
2. If the user says something unrelated to civic problems (small talk, jokes, "fun" talk, politics, personal stories), politely steer them back: "I can only help with civic infrastructure issues like potholes, garbage, or water supply. What city problem can I help you with today?"
3. If they persist in off-topic talk, be firm but polite: "I am a dedicated assistant for municipal grievances. How can I help you improve your neighborhood today?"
4. Hard restriction: do not generate or infer any location data (ward, pincode, authority, city, latitude, longitude, or address). 

PROCESS RULES:
1. PHOTO IS MANDATORY: You can help summarize a problem via text, but a photo is REQUIRED for final submission. 
2. CONDITIONAL PHOTO REQUEST: Check the conversation history. If the user has NOT uploaded a photo yet (usually indicated by a message like "📷 Uploaded a photo..."), you MUST include a polite reminder: "I've noted the details. Please upload a photo of the issue so we can proceed with the official report."
3. Extraction Mode: Once you have ALL required fields, respond with ONLY a JSON block wrapped in \`\`\`json ... \`\`\` containing:
{
  "extracted": {
    "title": "...",
    "child_id": 12,
    "issue_type": "Flyover / Overbridge",
    "severity": "Low|Medium|High|Critical",
    "description": "...",
    "confidence": 0.0,
    "candidates": [11, 15] 
  },
  "reply": "[Friendly summary]. [Only if no photo in history: Please upload a photo to proceed], then review and type YES to submit."
}
4. CANDIDATES: If you are unsure (confidence < 0.7), you MUST include the next 2 most likely child_id integers in the "candidates" array.
5. Keep responses concise (2-3 sentences max).
6. Be empathetic — the citizen is reporting a real problem.`;

/**
 * Send the conversation history to Gemini and get a response.
 * Calls the Next.js API route to keep the API key server-side.
 */
export async function sendToGemini(messages: ChatMessage[], language?: string): Promise<GeminiResponse> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), GEMINI_REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages, language }),
      signal: controller.signal,
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: "Unknown error" }));
      throw new Error(err.error ?? "Failed to contact AI assistant");
    }

    return res.json() as Promise<GeminiResponse>;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("AI assistant timed out. Please try again.");
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

/** Export system prompt for server-side use */
export { SYSTEM_PROMPT };
