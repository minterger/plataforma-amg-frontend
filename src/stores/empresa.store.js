import { defineStore } from "pinia";
import { notifyStore } from "./notify.store";
import { userStore } from "./user.store";

export const empresaStore = defineStore("empresa", () => {
  const notify = notifyStore();
  const user = userStore();

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
        type: "success",
        message: data.message,
      });
    } catch (error) {
      console.log(error);
      notify.pushNotifications({
        type: "danger",
        message: "Internal Server Error",
      });
    }
  };

  return {
    newEmpresa,
  };
});
