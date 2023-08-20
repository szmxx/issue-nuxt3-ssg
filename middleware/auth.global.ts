const WHITELIST = ['/login'];

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!WHITELIST.includes(to.path)) {
    const authToken = getToken();
    // no token need to navigate login
    if (!authToken) {
      return navigateTo(
        {
          path: '/login',
          query: {
            redirect: from.fullPath,
          },
        },
        {
          replace: true,
        }
      );
    }
  }
});
