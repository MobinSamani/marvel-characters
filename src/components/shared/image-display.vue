<template>
  <div class="w-full h-full">
    <img v-if="value" :src="value" :width="width" :height="height" class="max-w-full h-auto" />

    <div v-else class="flex items-center justify-center bg-zinc-900 text-zinc-600 w-full h-full text-xl min-h-[280px]">No Image</div>
  </div>
</template>

<script>
export default {
  name: "ImageDisplay",
  props: {
    value: String,
    width: { type: Number, required: true },
    height: { type: Number, required: true }
  }
};
</script>
