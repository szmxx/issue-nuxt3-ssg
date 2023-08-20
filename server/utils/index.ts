import type { H3Event } from 'h3';

export function handleError(e: unknown) {
  if (e instanceof Error) {
    throw createError(e);
  } else if (typeof e === 'string') {
    throw createError({
      message: e,
    });
  } else if (e && typeof e === 'object') {
    throw createError({
      message: e.message,
      statusCode: e.code,
      fatal: false,
    });
  }
}
function resolveHeaders(headers: Record<string, unknown>): string {
  if (!headers || !headers?.authorization) return '';
  const authorization = headers?.authorization || '';
  const parts = authorization?.trim?.()?.split?.(' ');
  if (parts.length === 2) {
    const scheme = parts[0];
    const credentials = parts[1];

    if (/^Bearer$/i.test(scheme)) return credentials;
  }
  return '';
}

export function parseToken(event: H3Event) {
  const { req } = event;
  const cookies = parseCookies(event);
  let token = cookies.token;
  if (!token) token = resolveHeaders(req.headers);
  return token;
}
