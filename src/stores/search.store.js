import { defineStore } from "pinia";
import { ref } from "vue";
import { useRoute } from "vue-router";

export const searchStore = defineStore("search", () => {
  const route = useRoute();
  const searchShow = ref(false);
  const search = ref("");
  const paramsToSeach = ref([]);

  return {
    searchShow,
    search,
    paramsToSeach,
  };
});
