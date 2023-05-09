<template>
  <div class="flex items-center justify-center grow py-8">
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
    iconClass: { type: String, default: "text-4xl md:text-6xl text-zinc-600" },
    messageClass: { type: String, default: "text-xl font-light text-zinc-400 text-center" }
  }
};
</script>
