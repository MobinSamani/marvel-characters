<template>
  <nuxt-link v-if="routerLink" :to="to" :target="target" :class="classes" :disabled="disabled">
    <icon v-if="preIcon || loading" :icon="loading ? 'circle-notch' : preIcon" :class="[iconClass, { 'fa-spin': loading }]" />
    <icon v-if="icon" :icon="icon" :class="iconClass" />
    <slot v-else></slot>
    <icon v-if="postIcon" :icon="postIcon" :class="iconClass" />
  </nuxt-link>

  <a v-else-if="link" :href="to" :target="target" :class="classes" :disabled="disabled">
    <icon v-if="preIcon || loading" :icon="loading ? 'circle-notch' : preIcon" :class="[iconClass, { 'fa-spin': loading }]" />
    <icon v-if="icon" :icon="icon" :class="iconClass" />
    <slot v-else></slot>
    <icon v-if="postIcon" :icon="postIcon" :class="iconClass" />
  </a>

  <button v-else type="button" :class="classes" :disabled="disabled">
    <icon v-if="preIcon || loading" :icon="loading ? 'circle-notch' : preIcon" :class="[iconClass, { 'fa-spin': loading }]" />
    <icon v-if="icon" :icon="icon" :class="iconClass" />
    <slot v-else></slot>
    <icon v-if="postIcon" :icon="postIcon" :class="iconClass" />
  </button>
</template>

<script>
export default {
  props: {
    disabled: { type: Boolean, default: false },
    preIcon: { type: [String, Array], default: null },
    postIcon: { type: [String, Array], default: null },
    icon: { type: [String, Array], default: null },
    to: { type: String, default: null },
    block: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    iconClass: { type: String, default: "" },
    routerLink: { type: Boolean, default: false },
    link: { type: Boolean, default: false },
    target: { type: String, default: "_self" }
  },
  computed: {
    classes() {
      return {
        [`py-3 px-6 flex justify-center items-center relative gap-x-2 duration-150 outline-none`]: true,
        "w-full": this.block,
        "opacity-50": this.disabled
      };
    }
  }
};
</script>
