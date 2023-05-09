<template>
  <div v-if="total > $config.public.itemsCount" class="flex items-center justify-center flex-wrap gap-x-2">
    <btn
      icon="angles-left"
      icon-class="fa-sm"
      :class="[classes, model === 1 ? 'text-zinc-400' : 'hover:bg-zinc-100']"
      :disabled="disabled || model === 1"
      @click="model = 1"
    />

    <btn
      icon="angle-left"
      icon-class="fa-sm"
      :class="[classes, model === 1 ? 'text-zinc-400' : 'hover:bg-zinc-100']"
      :disabled="disabled || model === 1"
      @click="--model"
    />

    <btn class="bg-zinc-100 !opacity-100" :class="classes" disabled>
      {{ model }}
    </btn>

    <btn
      icon="angle-left"
      icon-class="rotate-180 fa-sm"
      :class="[classes, model === maxPageNumber ? 'text-zinc-400' : 'hover:bg-zinc-100']"
      :disabled="disabled || model === maxPageNumber"
      @click="++model"
    />

    <btn
      icon="angles-left"
      icon-class="rotate-180 fa-sm"
      :class="[classes, model === maxPageNumber ? 'text-zinc-400' : 'hover:bg-zinc-100']"
      :disabled="disabled || model === maxPageNumber"
      @click="model = maxPageNumber"
    />
  </div>
</template>

<script>
import Btn from "@/components/shared/btn.vue";
import vModel from "@/mixins/v-model.vue";

export default {
  name: "Pagination",
  mixins: [vModel],
  components: {
    Btn
  },
  props: {
    total: { type: Number, required: true },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    maxPageNumber() {
      return Math.ceil(this.total / this.$config.public.itemsCount);
    },
    classes() {
      return "rounded-full min-w-[38px] max-w-[38px] min-h-[38px] max-h-[38px] !p-0 text-lg";
    }
  }
};
</script>
