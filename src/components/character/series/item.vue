<template>
  <btn
    link
    target="_blank"
    :to="series.urls[0].url"
    class="rounded-lg overflow-hidden !p-0 flex flex-col !items-start !justify-start bg-zinc-900 hover:text-red-600"
    :title="series.title"
  >
    <image-display :value="imageUrl" :width="600" :height="600" />

    <div class="p-4 w-full">
      <div class="sm:truncate text-lg">
        {{ series.title }}
      </div>
    </div>
  </btn>
</template>

<script>
import Btn from "@/components/shared/btn.vue";
import ImageDisplay from "@/components/shared/image-display.vue";

export default {
  name: "SeriesItem",
  components: {
    Btn,
    ImageDisplay
  },
  props: {
    series: { type: Object, required: true }
  },
  computed: {
    imageUrl() {
      if (!this.series?.thumbnail?.path || this.series.thumbnail.path.includes("image_not_available")) return;
      const thumbnail = this.series.thumbnail;
      return `${thumbnail.path}.${thumbnail.extension}`;
    }
  }
};
</script>
