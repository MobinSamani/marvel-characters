<template>
  <div class="flex justify-center">
    <div class="container p-8 flex flex-col gap-y-8">
      <div class="text-2xl">Comics</div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        <comic v-for="comic in comics" :key="comic.id" :comic="comic" />
      </div>
    </div>
  </div>
</template>

<script>
import Comic from "./item.vue";

export default {
  name: "CharacterComics",
  components: {
    Comic
  },
  props: {
    comics: { type: Array, default: () => [] }
  }
};
</script>
