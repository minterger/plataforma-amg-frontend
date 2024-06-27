<script setup>
import { ref } from "vue";
import { userStore } from "../stores/user.store";
import { searchStore } from "../stores/search.store";

const user = userStore();
const search = searchStore();

const menuUser = ref(false);
const paramsToggleMenu = ref(false);
</script>

<template>
  <div
    class="bg-white w-full border-b shadow-sm h-16 flex items-center gap-4 absolute z-10 px-8"
  >
    <div class="flex items-center w-full">
      <form
        @submit.prevent="search.search"
        class="flex items-center gap-2 w-full"
      >
        <label v-show="search.searchShow" for="search"
          ><i class="bx bx-search text-slate-400 text-2xl"></i
        ></label>
        <input
          v-show="search.searchShow"
          v-model="search.searchText"
          id="search"
          class="focus-visible:outline-none p-2 w-full"
          type="text"
          placeholder="Buscar..."
        />
      </form>

      <div
        class="relative flex items-center"
        v-show="search.searchShow && search.paramsShow"
      >
        <div
          class="flex items-center gap-2 cursor-pointer"
          @click="
            () => {
              paramsToggleMenu = !paramsToggleMenu;
            }
          "
        >
          <i class="bx bx-list-plus text-slate-400 text-2xl"></i>
          <span
            :class="[
              search.paramSelected ? 'text-slate-800' : 'text-slate-500',
            ]"
            class="md:min-w-20 hidden sm:block font-semibold whitespace-nowrap"
            >{{ search.paramSelected || "Filtro" }}</span
          >
        </div>
        <ul
          :class="
            paramsToggleMenu
              ? 'visible opacity-100'
              : 'invisible opacity-0 -scale-50'
          "
          class="absolute top-0 mt-9 flex flex-col bg-white rounded-md border shadow-lg transition-all"
        >
          <li v-for="param of search.paramsToSeach" class="w-full">
            <button
              class="w-full text-left hover:bg-gray-100 px-4 py-2 rounded-md transition-colors whitespace-nowrap"
              @click="
                () =>
                  (search.paramSelected = param) && (paramsToggleMenu = false)
              "
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
        class="absolute right-0 top-0 mt-9 rounded-md bg-white shadow-lg w-32 flex flex-col border transition-all"
      >
        <li class="flex">
          <router-link
            class="w-full hover:bg-gray-100 px-4 py-2 rounded-md transition-colors"
            to="/"
            >Tus Datos</router-link
          >
        </li>
        <li class="flex">
          <button
            class="w-full text-left hover:bg-gray-100 px-4 py-2 rounded-md transition-colors"
            @click="user.cerrarSesion"
          >
            Salir
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
