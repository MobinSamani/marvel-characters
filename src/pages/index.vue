<template>
  <div>
    <div class="flex justify-center">
      <div class="container p-8 flex flex-col gap-y-8">
        <pre>{{ characters }}</pre>
        <!-- <characters/> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Characters from "@/components/characters/index.vue";

// eslint-disable-next-line no-undef
export default defineNuxtComponent({
  name: "HomePage",
  // components: {
  //   Characters
  // },
  async asyncData(nuxtApp) {
    const app = nuxtApp.vueApp.config.globalProperties;
    const { data } = await app.$repos.characters.getAll({ offset: 0, limit: app.$config.public.itemsCount });

    return {
      characters: data.results,
      total: data.total
    };
  },
  data() {
    return {
      characters: null,
      total: null
    };
  }
});
</script>
