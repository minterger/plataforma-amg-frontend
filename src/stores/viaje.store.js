import { defineStore } from "pinia";
import { notifyStore } from "./notify.store";
import { userStore } from "./user.store";
import { ref } from "vue";

export const viajeStore = defineStore("viaje", () => {
  const notify = notifyStore();
  const user = userStore();
  const isLoadingViajes = ref(false);
  const dataViajes = ref();

  const getViajes = async ({ filter, search, page = 1, limit }) => {
    isLoadingViajes.value = true;
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/viajes?${filter ? `&filter=${filter}` : ""}${
          search ? `&search=${search}` : ""
        }${page ? `&page=${page}` : ""}${limit ? `&limit=${limit}` : ""}`
      );
      const data = await res.json();

      dataViajes.value = data;
    } catch (error) {
      notify.pushNotifications({
        type: "danger",
        message: "Error al obtener los viajes",
      });
    } finally {
      isLoadingViajes.value = false;
    }
  };

  const newViaje = async ({ origen, destino, fecha, empresaId }) => {
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/viajes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: user.userToken,
        },
        body: JSON.stringify({
          origen,
          destino,
          fecha,
          empresaId,
        }),
      });
      const data = await res.json();

      notify.pushNotifications({
        type: res.status === 200 ? "success" : "danger",
        message: data.message,
      });
    } catch (error) {
      notify.pushNotifications({
        type: "danger",
        message: "Error al crear el viaje",
      });
    }
  };

  return {
    isLoadingViajes,
    dataViajes,

    // methods
    newViaje,
  };
});
