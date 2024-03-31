import { defineStore } from "pinia";
import { ref, reactive, watch } from "vue";
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
      searchText.value = "";
      paramsToSeach.value = [];
    }
  );

  const searchShow = ref(false);
  const paramsShow = ref(false);
  const paramsToggleMenu = ref(false);
  const paramSelected = ref("");
  const searchText = ref("");
  const paramsToSeach = ref([]);

  const search = () => {};

  return {
    searchShow,
    paramsShow,
    paramsToggleMenu,
    paramSelected,
    searchText,
    paramsToSeach,

    // methods
    search,
  };
});
