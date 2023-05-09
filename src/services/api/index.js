import characters from "./characters.js";

export default ($axios) => ({
  characters: characters($axios)
});
