const RESOURCE = "/public/characters";

export default ($axios) => ({
  async getAll(params) {
    return await $axios.get(RESOURCE, { params });
  },
  async getById(id) {
    return await $axios.get(RESOURCE + "/" + id);
  },
  async getComics(id, params) {
    return await $axios.get(RESOURCE + "/" + id + "/comics", { params });
  },
  async getSeries(id, params) {
    return await $axios.get(RESOURCE + "/" + id + "/series", { params });
  }
});
