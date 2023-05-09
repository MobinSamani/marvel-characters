<template>
  <btn
    router-link
    :to="`/${character.id}`"
    class="rounded-lg overflow-hidden !p-0 flex flex-col !items-start !justify-start bg-zinc-900"
    :title="character.name"
  >
    <image-display :value="imageUrl" :width="600" :height="600" />

    <div class="p-4 w-full">
      <div class="sm:truncate text-lg">
        {{ character.name }}
      </div>
    </div>
  </btn>
</template>

<script>
import Btn from "@/components/shared/btn.vue";
import ImageDisplay from "@/components/shared/image-display.vue";

export default {
  name: "Character",
  components: {
    Btn,
    ImageDisplay
  },
  props: {
    character: { type: Object, required: true }
  },
  computed: {
    imageUrl() {
      if (!this.character?.thumbnail?.path || this.character.thumbnail.path.includes("image_not_available")) return;
      const thumbnail = this.character.thumbnail;
      return `${thumbnail.path}.${thumbnail.extension}`;
    }
  }
};
</script>
