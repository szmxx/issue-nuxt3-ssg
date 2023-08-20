const WHITELIST = [
  '/api/user/login',
  '/api/auth',
  '/api/user/register',
  '/api/user/forget',
  '/api/auth/refreshToken',
];
export default defineEventHandler(async (event) => {
  const { req } = event;
  // whitelist
  if (/^\/api\/.*/.test(req.url || '') && !WHITELIST.includes(req.url!)) {
    // exclude content doc
    if (!req.url?.startsWith('/api/_content')) {
      const token = parseToken(event);
      if (token) {
        try {
          // do something with auth
          console.info(token);
        } catch {
          throw createError({
            message: 'Authentication Error',
            statusCode: 401,
            fatal: false,
          });
        }
      } else {
        throw createError({
          message: 'Authentication Error',
          statusCode: 401,
          fatal: false,
        });
      }
    }
  }
});
