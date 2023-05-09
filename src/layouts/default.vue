<template>
  <div class="flex flex-col min-h-screen">
    <nuxt-loading-indicator color="#fafafa" />

    <app-header />

    <slot />
  </div>
</template>

<script>
import AppHeader from "@/components/layouts/header.vue";

export default {
  name: "DefaultLayout",
  components: {
    AppHeader
  }
};
</script>
