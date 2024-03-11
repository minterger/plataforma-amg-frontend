import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { notifyStore } from "./notify.store";

export const userStore = defineStore("users", () => {
  const notify = notifyStore();
  const router = useRouter();
  const userToken = ref("");
  const user = reactive({
    name: "",
    email: "",
  });

  const getTokenLocalStorage = () => {
    userToken.value = localStorage.getItem("token");
    if (userToken.value) {
      getDataUserFromToken();
    }
  };

  const setTokentLocalStorage = () => {
    localStorage.setItem("token", userToken.value);
    if (userToken.value) {
      getDataUserFromToken();
    }
  };

  const getDataUserFromToken = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/user", {
        headers: {
          authorization: userToken.value,
        },
      });

      const data = await res.json();

      if (res.ok) {
        user.name = data.name;
        user.email = data.email;
      } else {
        cerrarSesion();

        notify.pushNotifications({ message: data.message });
      }
    } catch (error) {
      notify.pushNotifications({ message: "internal server error" });
      if (error) {
        cerrarSesion();
      }
    }
  };

  const login = async (email, password) => {
    try {
      const res = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/user/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        userToken.value = data.token;
        setTokentLocalStorage();
        notify.pushNotifications({
          message: "Sesion iniciada correctamente",
          type: "success",
        });
        router.push("/");
      } else {
        notify.pushNotifications({ message: data.message });
      }
    } catch (error) {
      notify.pushNotifications({ message: "internal server error" });
    }
  };

  const cerrarSesion = () => {
    userToken.value = "";
    localStorage.removeItem("token");
    user.name = "";
    user.email = "";

    router.push("/login");
  };

  return {
    userToken,
    user,
    getTokenLocalStorage,
    setTokentLocalStorage,
    getDataUserFromToken,
    login,
    cerrarSesion,
  };
});
