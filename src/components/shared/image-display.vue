<template>
  <div>
    <img v-if="value" :src="`${$config.apiUrl}/${value}`" :width="width" :height="height" class="max-w-full h-auto" />

    <div v-else class="flex items-center justify-center bg-zinc-100 text-zinc-500 max-w-full h-auto" :style="`width: ${width}px; height: ${width}px`">
      {{ $config.appName }}
    </div>
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
