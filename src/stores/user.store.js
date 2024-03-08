import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

export const userStore = defineStore("users", () => {
  const router = useRouter();
  const userToken = ref("");
  const message = ref("");
  const isMessage = ref(false);
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
        console.log(data.token);
        userToken.value = data.token;
        setTokentLocalStorage();
        router.push("/");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("internal server error");
    }
  };

  const cerrarSesion = () => {
    userToken.value = "";
    localStorage.removeItem("token");
    user.name = "";
    user.email = "";

    router.push("/login");
  };

  const setMessage = (newMessage) => {
    message.value = newMessage;
    isMessage.value = true;
    setTimeout(() => {
      isMessage.value = false;
    }, 3000);
  };

  return {
    message,
    isMessage,
    userToken,
    user,
    getTokenLocalStorage,
    setTokentLocalStorage,
    getDataUserFromToken,
    login,
    cerrarSesion,
    setMessage,
  };
});
