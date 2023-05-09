<template>
  <nuxt-layout class="bg-zinc-800 text-zinc-50">
    <div class="grow p-8 flex flex-col gap-y-8 items-center justify-center text-center">
      <page-meta :title="title" />

      <h1 class="text-9xl font-semibold text-zinc-600">{{ error.statusCode }}</h1>
      <h2 class="text-3xl font-semibold text-zinc-400">Oops!</h2>

      <div class="text-zinc-600 max-w-[350px]">{{ message }}</div>

      <btn router-link to="/" block class="bg-zinc-900 hover:bg-zinc-950 max-w-[350px]">Back to Home Page</btn>
    </div>
  </nuxt-layout>
</template>

<script>
import Btn from "@/components/shared/btn.vue";
import PageMeta from "@/components/shared/page-meta.vue";

export default {
  name: "Error",
  components: {
    Btn,
    PageMeta
  },
  props: {
    error: Object
  },
  computed: {
    title() {
      if (this.error?.statusCode === 404) return "404 Page Not Found";
      else return "500 Server Error";
    },
    message() {
      if (this.error?.statusCode === 404) return "We could not find the page you are looking for; check the URL and try again";
      else return "Server is currently unavailable, try again later!";
    }
  }
};
</script>
