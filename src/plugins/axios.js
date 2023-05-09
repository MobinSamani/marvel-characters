import Axios from "axios";
import ErrorHandler from "@/services/error-handler.js";

function onResponse(res, ctx) {
  const response = res.response || res;

  if (!response) {
    ctx.$router.push("/500");
    return Promise.reject("Something Went Wrong!");
  }

  if (response.status >= 200 && response.status < 300) return response.data;
  return Promise.reject(ErrorHandler(response, { ...ctx }));
}

// eslint-disable-next-line no-undef
export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;
  const ctx = app.config.globalProperties;
  const config = nuxtApp.$config.public;

  const axios = Axios.create({
    baseURL: `${config.apiUrl}/v1`,
    headers: {
      common: {
        "X-Requested-With": "XMLHttpRequest",
        Accept: "application/json"
      }
    }
  });

  ctx.$axios = axios;

  axios.interceptors.response.use(
    (response) => onResponse(response, ctx),
    (response) => onResponse(response, ctx)
  );
});
