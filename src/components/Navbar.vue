<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const menuMobile = ref(false);

watch(
  () => route.path,
  () => {
    menuMobile.value = false;
  }
);
</script>

<template>
  <div
    :class="menuMobile ? 'translate-x-0' : '-translate-x-full'"
    class="fixed z-50 lg:static bg-gray-900 h-screen w-4/5 sm:w-80 lg:w-1/5 2xl:w-96 p-4 lg:translate-x-0 transition-transform ease-in-out"
  >
    <button
      @click="
        () => {
          menuMobile = !menuMobile;
        }
      "
      class="absolute lg:hidden top-20 -right-12 bg-gray-900 w-12 h-12 rounded-r-full flex pl-1 items-center"
    >
      <i
        :class="menuMobile ? 'bx-x' : 'bx-menu'"
        class="bx text-white text-3xl"
      ></i>
    </button>

    <img
      src="../assets/logoAMG.png"
      class="w-40 h-[23.7px] mt-4 w mx-auto"
      alt=""
    />

    <ul class="text-slate-400 font-semibold mt-8 flex flex-col gap-1">
      <li>
        <router-link
          class="px-2 py-1 flex gap-3 items-center rounded-md hover:bg-gray-800 hover:text-white transition-colors"
          to="/"
          active-class="bg-gray-800 text-white"
          ><i class="bx bx-home text-2xl font-light"></i>Inicio</router-link
        >
      </li>
      <li>
        <router-link
          class="px-2 py-1 flex gap-3 items-center rounded-md hover:bg-gray-800 hover:text-white transition-colors"
          to="/viajes"
          active-class="bg-gray-800 text-white"
          ><i class="bx bxs-truck text-2xl font-light"></i>Viajes</router-link
        >
      </li>
      <li>
        <router-link
          class="px-2 py-1 flex gap-3 items-center rounded-md hover:bg-gray-800 hover:text-white transition-colors"
          to="/jkhdiasbdiuasbdi"
          active-class="bg-gray-800 text-white"
          ><i class="bx bx-hard-hat text-2xl font-light"></i
          >Fleteros</router-link
        >
      </li>
      <li>
        <router-link
          class="px-2 py-1 flex gap-3 items-center rounded-md hover:bg-gray-800 hover:text-white transition-colors"
          to="/asdadasd"
          active-class="bg-gray-800 text-white"
          ><i class="bx bx-transfer text-2xl font-light"></i
          >Transportes</router-link
        >
      </li>
      <li>
        <router-link
          class="px-2 py-1 flex gap-3 items-center rounded-md hover:bg-gray-800 hover:text-white transition-colors"
          to="/asdasda"
          active-class="bg-gray-800 text-white"
          ><i class="bx bx-hard-hat text-2xl font-light"></i
          >Transportes</router-link
        >
      </li>
      <li>
        <router-link
          class="px-2 py-1 flex gap-3 items-center rounded-md hover:bg-gray-800 hover:text-white transition-colors"
          to="/asd"
          active-class="bg-gray-800 text-white"
          ><i class="bx bx-hard-hat text-2xl font-light"></i
          >Transportes</router-link
        >
      </li>
    </ul>
  </div>
</template>
