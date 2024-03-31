import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export const searchStore = defineStore("search", () => {
  const route = useRoute();

  watch(
    () => route.fullPath,
    () => {
      searchShow.value = false;
      paramsShow.value = false;
      paramsToggleMenu.value = false;
      paramSelected.value = "";
      search.value = "";
      paramsToSeach.value = [];
    }
  );

  const searchShow = ref(false);
  const paramsShow = ref(false);
  const paramsToggleMenu = ref(false);
  const paramSelected = ref("");
  const search = ref("");
  const paramsToSeach = ref([]);

  return {
    searchShow,
    paramsShow,
    paramsToggleMenu,
    paramSelected,
    search,
    paramsToSeach,
  };
});
