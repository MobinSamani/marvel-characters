// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  srcDir: "src/",
  css: ["@fortawesome/fontawesome-svg-core/styles.css", "vue-toastification/dist/index.css", "@/assets/styles/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.ENV_API_URL,
      appName: process.env.ENV_APP_NAME,
      appDescription: process.env.ENV_APP_DESCRIPTION,
      itemsCount: 20
    },
    publicKey: process.env.ENV_PUBLIC_KEY,
    privateKey: process.env.ENV_PRIVATE_KEY
  },
  build: {
    transpile: ["@fortawesome/vue-fontawesome"]
  },
  app: {
    pageTransition: { name: "slide-fade", mode: "out-in" },
    layoutTransition: { name: "slide-fade", mode: "out-in" },
    head: {
      titleTemplate: `${process.env.ENV_APP_NAME}%s`,
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: "description", content: process.env.ENV_APP_DESCRIPTION },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { hid: "robots", name: "robots", content: "index, follow" },
        { name: "application-name", content: process.env.ENV_APP_NAME }
      ]
    }
  },
  modules: ["@pinia/nuxt"]
});
