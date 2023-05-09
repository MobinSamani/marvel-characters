<template>
  <btn router-link to="/" class="!p-0">
    <img src="~/assets/svgs/logo.svg" :width="width" :height="height" :alt="$config.public.appName" />
  </btn>
</template>

<script>
import Btn from "@/components/shared/btn.vue";

export default {
  components: {
    Btn
  },
  props: {
    width: { type: Number, default: 130 },
    height: { type: Number, default: 52 }
  }
};
</script>
