// Instrumentation file for Sentry on Node.js
import * as Sentry from "@sentry/nextjs";

export async function register() {
  // Only initialize during runtime, not during build
  if (process.env.NEXT_RUNTIME === "nodejs" && process.env.NODE_ENV !== "development" && !process.env.SKIP_SENTRY) {
    try {
      Sentry.init({
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || "https://7b883d075caa19b41fd9b00ae313a1c6@o4506813739368448.ingest.us.sentry.io/4507222371729408",
        tracesSampleRate: 1,
        debug: false,
      });
    } catch (error) {
      // Silently fail if Sentry initialization fails
      console.warn("Sentry initialization failed:", error);
    }
  }
}
