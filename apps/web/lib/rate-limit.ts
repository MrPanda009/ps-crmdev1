/**
 * rate-limit.ts — Lightweight sliding-window rate limiter for Next.js API routes.
 * Uses in-memory Map; suitable for single-process deployments.
 * For multi-instance, replace with Redis-based implementation.
 */

interface RateLimitEntry {
  timestamps: number[];
}

const store = new Map<string, RateLimitEntry>();

// Cleanup stale entries every 60 seconds to prevent memory leak
let cleanupInterval: ReturnType<typeof setInterval> | null = null;

function ensureCleanup(windowMs: number) {
  if (cleanupInterval) return;
  cleanupInterval = setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of store) {
      entry.timestamps = entry.timestamps.filter((t) => now - t < windowMs * 2);
      if (entry.timestamps.length === 0) store.delete(key);
    }
  }, 60_000);
  // Don't prevent Node.js from exiting
  if (typeof cleanupInterval === "object" && "unref" in cleanupInterval) {
    cleanupInterval.unref();
  }
}

export interface RateLimitConfig {
  /** Maximum number of requests allowed within the window */
  maxRequests: number;
  /** Window size in milliseconds */
  windowMs: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterMs: number;
}

/**
 * Check whether a request from `identifier` is within the rate limit.
 * Returns { allowed, remaining, retryAfterMs }.
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig,
): RateLimitResult {
  ensureCleanup(config.windowMs);

  const now = Date.now();
  const entry = store.get(identifier) ?? { timestamps: [] };

  // Remove timestamps outside the current window
  entry.timestamps = entry.timestamps.filter((t) => now - t < config.windowMs);

  if (entry.timestamps.length >= config.maxRequests) {
    const oldest = entry.timestamps[0]!;
    const retryAfterMs = config.windowMs - (now - oldest);
    store.set(identifier, entry);
    return {
      allowed: false,
      remaining: 0,
      retryAfterMs: Math.max(0, retryAfterMs),
    };
  }

  entry.timestamps.push(now);
  store.set(identifier, entry);
  return {
    allowed: true,
    remaining: config.maxRequests - entry.timestamps.length,
    retryAfterMs: 0,
  };
}

/**
 * Derive a rate-limit key from a Next.js Request.
 * Prefers authenticated user ID, falls back to IP.
 */
export function rateLimitKey(req: Request, prefix: string): string {
  // Try forwarded IP first (behind proxy/CDN)
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";
  return `${prefix}:${ip}`;
}

// Preset configurations for different endpoint types
export const RATE_LIMITS = {
  /** Chat endpoint: 20 requests per minute */
  chat: { maxRequests: 20, windowMs: 60_000 } as RateLimitConfig,
  /** Complaint submission: 5 per minute */
  complaints: { maxRequests: 5, windowMs: 60_000 } as RateLimitConfig,
  /** STT (voice): 10 per minute */
  stt: { maxRequests: 10, windowMs: 60_000 } as RateLimitConfig,
} as const;
