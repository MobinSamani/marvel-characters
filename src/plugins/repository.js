import createRepository from "@/services/api/index.js";

// eslint-disable-next-line no-undef
export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;
  const $axios = app.config.globalProperties.$axios;

  app.config.globalProperties.$repos = createRepository($axios);
});
