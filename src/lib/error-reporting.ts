/**
 * Generic error reporting helper. Logs errors to the console and could be
 * extended to forward to any observability provider (Sentry, Datadog, etc.).
 */
export function reportError(
  error: unknown,
  context: Record<string, unknown> = {},
) {
  console.error("[reportError]", error, context);
}
