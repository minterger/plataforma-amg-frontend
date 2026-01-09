import { defineStore } from "pinia";
import { notifyStore } from "./notify.store";
import { userStore } from "./user.store";
import { ref } from "vue";

export const empresaStore = defineStore("empresa", () => {
  const notify = notifyStore();
  const user = userStore();
  const isLoadingEmpresas = ref(false);
  const dataEmpresas = ref();

  const newEmpresa = async ({ empresa, id_tributaria, type }) => {
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/empresas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: user.userToken,
        },
        body: JSON.stringify({
          empresa,
          id_tributaria,
          type,
        }),
      });

      const data = await res.json();

      notify.pushNotifications({
        type: res.status === 200 ? "success" : "danger",
        message: data.message,
      });

      return res.status === 200;
    } catch (error) {
      console.error(error);
      notify.pushNotifications({
        type: "danger",
        message: "Internal Server Error: create Empresa",
      });
      return false;
    }
  };

  const getEmpresas = async ({ filter, search, type, page = 1, limit }) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/empresas?type=${type}${
          filter ? `&filter=${filter}` : ""
        }${search ? `&search=${search}` : ""}${page ? `&page=${page}` : ""}${
          limit ? `&limit=${limit}` : ""
        }`,
        {
          headers: {
            authorization: user.userToken,
          },
        }
      );
      isLoadingEmpresas.value = false;
      dataEmpresas.value = await res.json();
      console.log(dataEmpresas.value);
      return dataEmpresas.value;
    } catch (error) {
      console.error(error);
      notify.pushNotifications({
        type: "danger",
        message: "Internal Server Error: get Empresas",
      });
    }
  };

  const getOneEmpresa = async ({ id, type }) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/empresas/${id}/${type}`,
        {
          headers: {
            authorization: user.userToken,
          },
        }
      );
      return await res.json();
    } catch (error) {
      console.error(error);
      notify.pushNotifications({
        type: "danger",
        message: "Internal Server Error: get Empresa",
      });
    }
  };

  const deleteEmpresa = async ({ id, type }) => {
    try {
      const confirm = window.confirm("¿Estás seguro de eliminar esta empresa?");

      if (!confirm) return false;

      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/empresas/${id}/${type}`,
        {
          method: "DELETE",
          headers: {
            authorization: user.userToken,
          },
        }
      );
      const data = await res.json();
      notify.pushNotifications({
        type: res.status === 200 ? "success" : "danger",
        message: data.message,
      });
      return res.status === 200;
    } catch (error) {
      console.error(error);
      notify.pushNotifications({
        type: "danger",
        message: "Internal Server Error: delete Empresa",
      });
      return false;
    }
  };

  return {
    // stats
    dataEmpresas,
    isLoadingEmpresas,

    //methods
    newEmpresa,
    getEmpresas,
    getOneEmpresa,
    deleteEmpresa,
  };
});
