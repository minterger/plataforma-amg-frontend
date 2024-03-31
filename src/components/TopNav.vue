<script setup>
import { ref, onBeforeUnmount } from "vue";
import { userStore } from "../stores/user.store";
import { searchStore } from "../stores/search.store";

const user = userStore();
const search = searchStore();

const menuUser = ref(false);
</script>

<template>
  <div
    class="bg-white w-full border-b shadow-sm h-16 flex items-center gap-4 absolute z-10 px-8"
  >
    <div class="flex items-center gap-2 w-full">
      <label v-show="search.searchShow" for="search"
        ><i class="bx bx-search text-slate-400 text-2xl"></i
      ></label>
      <input
        v-show="search.searchShow"
        v-model="search.search"
        id="search"
        class="focus-visible:outline-none p-2 w-full"
        type="text"
        placeholder="Buscar..."
      />

      <div
        class="relative flex items-center"
        v-show="search.searchShow && search.paramsShow"
      >
        <div
          class="flex items-center gap-2 cursor-pointer"
          @click="
            () => {
              search.paramsToggleMenu = !search.paramsToggleMenu;
            }
          "
        >
          <i class="bx bx-list-plus text-slate-400 text-2xl"></i>
          <span class="text-slate-600 md:min-w-20">{{
            search.paramSelected || "Select"
          }}</span>
        </div>
        <ul
          :class="
            search.paramsToggleMenu
              ? 'visible opacity-100'
              : 'invisible opacity-0 -scale-50'
          "
          class="absolute top-0 mt-9 p-4 flex flex-col gap-4 bg-white rounded-md border shadow-lg"
        >
          <li v-for="param of search.paramsToSeach" class="w-full">
            <button
              class="w-full text-left"
              @click="() => (search.paramSelected = param)"
            >
              {{ param }}
            </button>
          </li>
        </ul>
      </div>
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
        {{ user.user.name
        }}<i class="bx bx-chevron-down text-slate-400 text-2xl"></i>
      </button>
      <ul
        :class="
          menuUser ? 'visible opacity-100' : 'invisible opacity-0 -scale-50'
        "
        class="absolute right-0 rounded-md bg-white shadow-lg mt-2 w-32 flex flex-col py-1 border transition-all"
      >
        <li class="flex">
          <router-link class="w-full px-2 py-1" to="/">Tus Datos</router-link>
        </li>
        <li class="flex">
          <button class="w-full text-left px-2 py-1" @click="user.cerrarSesion">
            Salir
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
