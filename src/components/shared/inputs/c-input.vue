<template>
  <div class="flex flex-col gap-y-4">
    <label v-if="label || $slots.label" :for="`input-${id}`" class="block text-zinc-400">
      <slot name="label"> {{ label }} : <span v-if="required" class="text-red-500">*</span> </slot>
    </label>

    <div class="flex flex-col gap-y-2">
      <div :class="classes">
        <div v-if="icon" class="flex items-center justify-center px-4">
          <icon :icon="icon" class="text-zinc-400 fa-fw" />
        </div>

        <input
          ref="input"
          :id="`input-${id}`"
          :placeholder="placeholder"
          class="grow bg-transparent py-2 outline-none h-[42px] w-full"
          :type="type"
          :readonly="readonly"
          :disabled="disabled"
          v-model="model"
        />

        <div v-if="$slots.append" class="flex items-center justify-center px-4">
          <slot name="append"></slot>
        </div>
      </div>

      <div v-if="error" class="text-red-500 text-sm">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import vModel from "@/mixins/v-model.vue";

export default {
  name: "CInput",
  mixins: [vModel],
  props: {
    label: String,
    placeholder: String,
    required: { type: Boolean, default: false },
    numeric: { type: Boolean, default: false },
    icon: String,
    type: { type: String, default: "text" },
    readonly: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    wrapperClasses: String
  },
  data() {
    return {
      id: String(Math.floor(Math.random() * 99999999)),
      error: null
    };
  },
  computed: {
    classes() {
      return [
        {
          "bg-zinc-900 border border-zinc-900 flex items-center duration-150 rounded-lg": true,
          "!border-red-500": this.error,
          "pl-4": !this.icon,
          "pr-4": !this.$slots.append
        },
        this.wrapperClasses
      ];
    }
  },
  mounted() {
    if (this.required || this.numeric) {
      this.$watch("model", (value) => {
        if (this.numeric && isNaN(value)) this.error = "Digits Only";
        else if (this.required && !value?.length) this.error = "Required";
        else this.error = "";
      });
    }
  }
};
</script>
