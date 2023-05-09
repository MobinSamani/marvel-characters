<template>
  <div class="flex justify-center">
    <div class="container p-8 flex flex-col gap-y-8">
      <form class="flex" @submit.prevent="search({ type: 'search' })">
        <c-input
          :disabled="loading"
          class="grow"
          wrapper-classes="rounded-r-none border-r-0"
          placeholder="Search for characters..."
          v-model="searchKey"
        />

        <btn
          :disabled="loading"
          :pre-icon="loading ? 'circle-notch' : 'magnifying-glass'"
          class="bg-red-600 text-zinc-50 py-0 rounded-l-none !py-2 !px-4 md:!px-6"
          :icon-class="loading ? 'fa-spin' : ''"
          type="submit"
        >
          <div class="hidden md:block">Search</div>
        </btn>
      </form>

      <div class="relative">
        <loading v-if="loading" />

        <div v-if="characters?.length" class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          <character v-for="character in characters" :key="character.id" :character="character" />
        </div>

        <empty-list v-else />
      </div>

      <pagination :total="total" :disabled="loading" v-model="page" />
    </div>
  </div>
</template>

<script>
import Btn from "@/components/shared/btn.vue";
import Character from "@/components/character.vue";
import CInput from "@/components/shared/inputs/c-input.vue";
import EmptyList from "@/components/shared/empty-list.vue";
import Loading from "@/components/shared/loading.vue";
import Pagination from "@/components/shared/pagination.vue";

// eslint-disable-next-line no-undef
export default defineNuxtComponent({
  name: "HomePage",
  components: {
    Btn,
    Character,
    CInput,
    EmptyList,
    Loading,
    Pagination
  },
  async asyncData(nuxtApp) {
    const app = nuxtApp.vueApp.config.globalProperties;
    const { data } = await app.$repos.characters.getAll({ offset: 0, limit: app.$config.public.itemsCount });

    return {
      characters: data.results,
      total: data.total
    };
  },
  mounted() {
    this.$watch("page", () => this.search({ type: "paging" }));
  },
  data() {
    return {
      characters: null,
      loading: false,
      page: 1,
      searchKey: null,
      total: null
    };
  },
  methods: {
    async search({ type }) {
      if (this.loading) return;

      this.loading = true;

      if (type === "paging") this.goToTop();
      else this.page = 1;

      try {
        const params = {};
        const offset = (this.page - 1) * this.$config.public.itemsCount;
        const limit = this.$config.public.itemsCount;

        this.searchKey = this.searchKey?.trim();
        if (this.searchKey?.length) params.name = this.searchKey;

        const { data } = await this.$repos.characters.getAll({ offset, limit, ...params });
        this.characters = data.results;
        this.total = data.total;
      } catch (error) {
        this.$toast.error(error);
      } finally {
        this.loading = false;
      }
    },
    goToTop() {
      window?.scroll({
        top: 0,
        behavior: "smooth"
      });
    }
  }
});
</script>
