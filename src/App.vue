<script setup>
import { ref } from "vue";

const menuUser = ref(false);
</script>

<template>
  <div class="w-screen max-w-full h-screen max-h-screen flex">
    <div class="fixed z-10 lg:static bg-gray-900 h-screen w-96 p-4">
      <img
        src="./assets/logoAMG.png"
        class="w-40 h-[23.7px] mt-4 mx-auto"
        alt=""
      />

      <ul class="text-slate-400 font-semibold mt-8 flex flex-col gap-1">
        <li>
          <router-link
            class="px-2 py-1 flex gap-3 items-center rounded-md hover:bg-gray-800 hover:text-white transition-colors"
            to=""
            ><i class="bx bx-home text-2xl font-light"></i>Inicio</router-link
          >
        </li>
        <li>
          <router-link
            class="px-2 py-1 flex gap-3 items-center rounded-md hover:bg-gray-800 hover:text-white transition-colors"
            to=""
            ><i class="bx bxs-truck text-2xl font-light"></i>Viajes</router-link
          >
        </li>
        <li>
          <router-link
            class="px-2 py-1 flex gap-3 items-center rounded-md hover:bg-gray-800 hover:text-white transition-colors"
            to=""
            ><i class="bx bx-hard-hat text-2xl font-light"></i
            >Fleteros</router-link
          >
        </li>
        <li>
          <router-link
            class="px-2 py-1 flex gap-3 items-center rounded-md hover:bg-gray-800 hover:text-white transition-colors"
            to=""
            ><i class="bx bx-transfer text-2xl font-light"></i
            >Transportes</router-link
          >
        </li>
        <li>
          <router-link
            class="px-2 py-1 flex gap-3 items-center rounded-md hover:bg-gray-800 hover:text-white transition-colors"
            to=""
            ><i class="bx bx-hard-hat text-2xl font-light"></i
            >Transportes</router-link
          >
        </li>
        <li>
          <router-link
            class="px-2 py-1 flex gap-3 items-center rounded-md hover:bg-gray-800 hover:text-white transition-colors"
            to=""
            ><i class="bx bx-hard-hat text-2xl font-light"></i
            >Transportes</router-link
          >
        </li>
      </ul>
    </div>
    <div class="w-full h-screen relative">
      <div
        class="border-b shadow-sm w-full h-16 flex items-center gap-4 absolute px-8"
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
      <div class="w-full h-full p-8 pt-24"><router-view></router-view></div>
    </div>
  </div>
</template>
