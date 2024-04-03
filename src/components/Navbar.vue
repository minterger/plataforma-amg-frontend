<script setup>
// import { ref, watch } from "vue";
// import { useRoute } from "vue-router";

// const route = useRoute();

const props = defineProps(["menu"]);
const emit = defineEmits(["toggleNav"]);

// watch(
//   () => route.path,
//   () => {
//     emit("toggleNav", false);
//   }
// );
</script>

<template>
  <div
    :class="
      menu
        ? 'translate-x-0 '
        : '-translate-x-full lg:w-[4.5rem] lg:min-w-[4.5rem]'
    "
    class="fixed z-50 lg:static bg-gray-900 h-screen w-4/5 sm:w-72 2xl:w-72 sm:min-w-72 p-4 lg:translate-x-0 transition-transform lg:transition-all ease-in-out"
  >
    <button
      @click="emit('toggleNav', !menu)"
      class="absolute top-20 -right-12 2xl:hidden bg-gray-900 w-12 h-12 rounded-r-full flex pl-1 items-center"
    >
      <i
        :class="menu ? 'bx-x' : 'bx-menu'"
        class="lg:hidden bx text-white text-3xl"
      ></i>
      <i
        :class="menu ? 'rotate-0' : 'rotate-180'"
        class="hidden bx-chevrons-left lg:block bx text-white text-3xl transition-transform"
      ></i>
    </button>

    <div class="h-[23.7px]">
      <img
        src="../assets/logoAMG.png"
        class="w-40 mt-4 w mx-auto logo"
        alt=""
      />
    </div>

    <ul class="text-slate-400 font-semibold mt-8 flex flex-col gap-1">
      <li>
        <router-link
          class="px-2 py-1 flex gap-3 items-center rounded-md hover:bg-gray-800 hover:text-white transition-colors overflow-hidden"
          to="/"
          active-class="bg-gray-800 text-white"
          ><i class="bx bx-home text-2xl font-light"></i>Inicio</router-link
        >
      </li>
      <li>
        <router-link
          class="px-2 py-1 flex gap-3 items-center rounded-md hover:bg-gray-800 hover:text-white transition-colors overflow-hidden"
          to="/viajes"
          active-class="bg-gray-800 text-white"
          ><i class="bx bxs-truck text-2xl font-light"></i>Viajes</router-link
        >
      </li>
      <li>
        <router-link
          class="px-2 py-1 flex gap-3 items-center rounded-md hover:bg-gray-800 hover:text-white transition-colors overflow-hidden"
          to="/transportes"
          active-class="bg-gray-800 text-white"
          ><i class="bx bx-hard-hat text-2xl font-light"></i
          >Transportes</router-link
        >
      </li>
      <li>
        <router-link
          class="px-2 py-1 flex gap-3 items-center rounded-md hover:bg-gray-800 hover:text-white transition-colors overflow-hidden"
          to="/clientes"
          active-class="bg-gray-800 text-white"
          ><i class="bx bx-transfer text-2xl font-light"></i
          >Clientes</router-link
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.logo {
  filter: saturate(0) brightness(4.6) contrast(0.9);
}
</style>
