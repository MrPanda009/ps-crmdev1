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

RULES:
1. Greet warmly on the first message. Ask what issue they want to report.
2. If the user's message is unclear, ask a specific clarifying question. Never make up data.
3. When you still need info, reply in plain conversational text. Do NOT output JSON yet.
4. Hard restriction: do not generate or infer any location data (ward, pincode, authority, city, latitude, longitude, or address). If asked for location details, ask the user to provide it for submission flow, but do not include it in extracted JSON.
5. Extraction Mode: Once you have ALL required fields, respond with ONLY a JSON block wrapped in \`\`\`json ... \`\`\` containing:
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
  "reply": "Here is your complaint summary. Please review and type YES to submit."
}
6. CANDIDATES: If you are unsure (confidence < 0.7), you MUST include the next 2 most likely child_id integers in the "candidates" array.
7. If user says something unrelated to civic issues, politely redirect.
8. Keep responses concise (2-3 sentences max unless listing confirmation).
9. Be empathetic — the citizen is reporting a real problem.`;

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
