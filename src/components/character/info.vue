<template>
  <div class="flex justify-center">
    <div class="container p-8 flex flex-col gap-y-8">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="flex rounded-lg overflow-hidden min-w-[250px]">
          <image-display :value="imageUrl" :width="250" :height="250" />
        </div>

        <div class="flex flex-col gap-y-8">
          <div v-if="character.name" class="text-4xl">
            {{ character.name }}
          </div>

          <div v-if="character.description" class="text-zinc-400">
            {{ character.description }}
          </div>

          <div v-if="character.urls?.length" class="flex gap-4 flex-wrap">
            <btn
              v-for="url in character.urls"
              :key="url.type"
              block
              link
              :to="url.url"
              target="_blank"
              pre-icon="arrow-up-right-from-square"
              class="border border-zinc-700 capitalize hover:bg-zinc-900 !py-2 !px-4 md:w-auto"
            >
              {{ url.type }}
            </btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/shared/btn.vue";
import ImageDisplay from "@/components/shared/image-display.vue";

export default {
  name: "CharacterInfo",
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
