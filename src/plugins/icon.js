import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleNotch, faMagnifyingGlass, faAngleLeft, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleNotch, faMagnifyingGlass, faAngleLeft, faAnglesLeft);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// eslint-disable-next-line no-undef
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("icon", FontAwesomeIcon);
});
