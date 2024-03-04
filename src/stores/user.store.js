import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const userStore = defineStore("users", () => {
  const userToken = ref("");
  const user = reactive({
    name: "",
    email: "",
  });

  const getTokenLocalStorage = () => {
    userToken.value = localStorage.getItem("token");
  };

  const setTokentLocalStorage = () => {
    localStorage.setItem("token", userToken);
  };

  const getDataUserFromToken = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/user");

      const data = await res.json();

      user.name = data.name;
      user.email = data.email;
    } catch (error) {
      if (error) {
        userToken.value = "";
        user.name = "";
        user.email = "";
      }
    }
  };

  const login = (email, password) => {};

  return {
    userToken,
    user,
    getTokenLocalStorage,
    setTokentLocalStorage,
    getDataUserFromToken,
    login,
  };
});
