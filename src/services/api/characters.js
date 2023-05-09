const RESOURCE = "/public/characters";

export default ($axios) => ({
  async getAll(params) {
    return await $axios.get(RESOURCE, { params });
  },
  async getById(id) {
    return await $axios.get(RESOURCE + "/" + id);
  }
});
