// eslint-disable-next-line no-undef
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== from.path && process.client) {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }
});
