import { defineStore } from "pinia";
import { notifyStore } from "./notify.store";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export const searchStore = defineStore("search", () => {
  const route = useRoute();
  const notify = notifyStore();

  watch(
    () => route.path,
    () => {
      searchShow.value = false;
      paramsShow.value = false;
      paramSelected.value = "";
      searchText.value = "";
      paramsToSeach.value = [];
    }
  );

  // variable para seleccionar la funcion para la busqueda
  const searchIn = ref("");

  // funcion que se va a utilizar para realizar la busqueda
  const whereSearch = {
    viajes() {
      console.log(`Viajes ${paramSelected.value} ${searchText.value}`);
    },
    transportes() {
      console.log(`Transportes ${paramSelected.value} ${searchText.value}`);
    },
  };

  const searchShow = ref(false);
  const paramsShow = ref(false);
  const paramSelected = ref("");
  const searchText = ref("");
  const paramsToSeach = ref([]);

  const search = () => {
    if (searchShow.value && !searchText.value) {
      notify.pushNotifications({ message: "Escribe lo que necesites buscar" });
      return;
    }
    if (paramsShow.value && !paramSelected.value) {
      notify.pushNotifications({
        message: "Elije un parametro para la busqueda",
      });
      return;
    }

    // ejecuta la funcion seleccionada para la busqueda
    whereSearch[searchIn.value]();
  };

  return {
    searchShow,
    paramsShow,
    paramSelected,
    searchText,
    paramsToSeach,
    searchIn,

    // methods
    search,
  };
});
