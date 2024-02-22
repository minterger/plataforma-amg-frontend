<script setup>
import { ref } from "vue";

const menuUser = ref(false);
</script>

<template>
  <div
    class="bg-white border-b shadow-sm w-full h-16 flex items-center gap-4 absolute px-8"
  >
    <div class="flex items-center gap-2 w-full">
      <label for="search"
        ><i class="bx bx-search text-slate-400 text-2xl"></i
      ></label>
      <input
        id="search"
        class="w-full focus-visible:outline-none p-2"
        type="text"
        placeholder="Buscar..."
      />
    </div>
    <div class="relative">
      <button
        @click="
          () => {
            menuUser = !menuUser;
          }
        "
        class="font-semibold flex items-center gap-2 whitespace-nowrap"
      >
        Oscar Leonel Menci<i
          class="bx bx-chevron-down text-slate-400 text-2xl"
        ></i>
      </button>
      <ul
        :class="
          menuUser ? 'visible opacity-100' : 'invisible opacity-0 -scale-50'
        "
        class="absolute right-0 rounded-md bg-white shadow-lg px-4 py-2 mt-2 w-32 flex flex-col gap-2 border transition-all"
      >
        <li><router-link to="/">Tus Datos</router-link></li>
        <li><button>Salir</button></li>
      </ul>
    </div>
  </div>
</template>
