<template>
  <div class="flex flex-col divide-y divide-zinc-700">
    <info :character="character" />
    <comics v-if="comics" :comics="comics" />
    <series v-if="series" :series="series" />
  </div>
</template>

<script>
import Comics from "@/components/character/comics/index.vue";
import Info from "@/components/character/info.vue";
import Series from "@/components/character/series/index.vue";

// eslint-disable-next-line no-undef
export default defineNuxtComponent({
  name: "CharacterPage",
  components: {
    Comics,
    Info,
    Series
  },
  async asyncData(nuxtApp) {
    const app = nuxtApp.vueApp.config.globalProperties;
    const characterId = app.$route.params.id;
    const character = await app.$repos.characters.getById(characterId);
    const comics = await app.$repos.characters.getComics(characterId, { offset: 0, limit: app.$config.public.itemsCount });
    const series = await app.$repos.characters.getSeries(characterId, { offset: 0, limit: app.$config.public.itemsCount });

    return {
      character: character?.data?.results?.[0],
      comics: comics?.data?.results,
      series: series?.data?.results
    };
  },
  data() {
    return {
      character: null,
      comics: null,
      series: null
    };
  }
});
</script>
