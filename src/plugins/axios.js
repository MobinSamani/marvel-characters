import Axios from "axios";
import ErrorHandler from "@/services/error-handler.js";
import MD5 from "crypto-js/md5";

function onResponse(res, ctx) {
  console.log(res);
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
  const config = nuxtApp.$config;
  const ts = Date.now();
  const publicKey = config.publicKey;
  const privateKey = config.privateKey;

  const axios = Axios.create({
    baseURL: `${config.public.apiUrl}/v1`,
    params: {
      ts,
      apikey: publicKey,
      hash: MD5(ts + privateKey + publicKey).toString()
    },
    headers: {
      common: {
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
