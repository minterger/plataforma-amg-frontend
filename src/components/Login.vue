<script setup>
import { reactive } from "vue";
import { userStore } from "../stores/user.store";

const userData = reactive({
  email: "",
  password: "",
});

const user = userStore();
</script>

<template>
  <div
    class="w-full overflow-auto min-h-screen flex flex-col gap-10 justify-center items-center p-4 bg-gray-800"
  >
    <img src="../assets/AMG.png" class="w-64" />
    <div
      class="w-full sm:w-96 flex flex-col gap-4 bg-gray-700 bg-opacity-50 rounded-lg text-white p-4 shadow-lg"
    >
      <h1
        class="text-center text-2xl border-b border-dashed border-gray-500 pb-4"
      >
        Iniciar Sesion
      </h1>

      <!-- <form
        class="w-full flex flex-col gap-4"
        @submit.prevent="user.login(userData.email, userData.password)"
      > -->
      <form
        class="w-full flex flex-col gap-4"
        @submit.prevent="
          () => {
            user.userToken = 'asdasdasdasd';
          }
        "
      >
        <div>
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            v-model="userData.email"
            class="text-sm w-full mt-2 px-2 py-2 text-gray-600 bg-opacity-30 rounded-md"
            placeholder="ejemplo@email.com"
            required
          />
        </div>
        <div>
          <label for="password" class="mt-4">Contraseña</label>
          <input
            id="password"
            type="password"
            name="password"
            v-model="userData.password"
            class="text-sm w-full mt-2 px-2 py-2 text-gray-600 bg-opacity-30 rounded-md"
            placeholder="••••••••••••"
            required
          />
        </div>

        <button
          class="bg-slate-900 hover:bg-slate-950 py-2 rounded-md transition-colors"
        >
          Entrar
        </button>
      </form>
    </div>
  </div>
</template>
