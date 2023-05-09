<template>
  <div class="flex justify-center border-b border-zinc-700">
    <div class="container px-8 py-6 flex items-center">
      <logo />
    </div>
  </div>
</template>

<script>
import Logo from "@/components/shared/logo.vue";

export default {
  name: "AppHeader",
  components: {
    Logo
  }
};
</script>
