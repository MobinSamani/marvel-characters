<template>
  <div class="flex justify-center">
    <div class="container p-8 flex flex-col gap-y-8">
      <div class="text-2xl">Series</div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        <series v-for="seriesItem in series" :key="seriesItem.id" :series="seriesItem" />
      </div>
    </div>
  </div>
</template>

<script>
import Series from "./item.vue";

export default {
  name: "CharacterSeries",
  components: {
    Series
  },
  props: {
    series: { type: Array, default: () => [] }
  }
};
</script>
