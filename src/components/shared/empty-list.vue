<template>
  <div class="flex items-center justify-center grow px-8 py-24">
    <div class="flex flex-col gap-y-8">
      <icon icon="magnifying-glass" :class="iconClass" />
      <div :class="messageClass">Your search did not have any matches.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptyList",
  props: {
    iconClass: { type: String, default: "text-4xl md:text-6xl text-zinc-200" },
    messageClass: { type: String, default: "text-xl font-light text-zinc-500 text-center" }
  }
};
</script>
