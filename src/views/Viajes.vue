<script setup>
import { useRouter } from "vue-router";
import { searchStore } from "../stores/search.store";

const search = searchStore();

search.paramsToSeach = ["CRT", "MIC", "Transporte", "Cliente", "Contrato"];

search.searchShow = true;
search.paramsShow = true;

const router = useRouter();

const routerPush = (id) => {
  router.push("/viajes/select/" + id);
};
</script>

<template>
  <div>
    <div class="w-full flex gap-2 justify-end mb-6">
      <router-link
        to="/viajes/new"
        class="flex items-center bg-green-700 text-white gap-2 px-4 py-2 rounded-md"
      >
        <i class="bx bx-plus"></i> Añadir
      </router-link>
      <button
        class="flex items-center bg-gray-800 text-white gap-2 px-4 py-2 rounded-md"
      >
        <i class="bx bx-loader-alt"></i> Actualizar
      </button>
    </div>
    <div
      class="border border-dashed p-4 rounded-lg shadow-md bg-white overflow-x-auto w-full"
    >
      <table
        class="my-0 align-middle text-dark border-neutral-200 border-collapse w-full"
      >
        <thead>
          <tr class="font-semibold text-[0.95rem] text-slate-500">
            <th class="pb-3 text-start">N° Contrato</th>
            <th class="pb-3 text-start">Fecha Inicio</th>
            <th class="pb-3 text-start">Transporte</th>
            <th class="pb-3 text-start">Chofer</th>
            <th class="pb-3 text-center">CRT : MIC</th>
            <th class="pb-3 text-center">Origen : Destino</th>
            <th class="pb-3 text-start">Cliente</th>
            <th class="pb-3 text-start">Estado</th>
          </tr>
        </thead>
        <tbody class="text-slate-800 w-full">
          <tr
            v-for="i in 10"
            class="border-b border-dashed last:border-b-0"
            @click="routerPush('AMG-12312312' + i)"
          >
            <td class="text-sm font-semibold py-5 pr-5 whitespace-nowrap">
              AMG-12312312
            </td>
            <td class="text-sm font-semibold py-5 pr-5 whitespace-nowrap">
              12/10/2023
            </td>
            <td class="text-sm font-bold py-5 pr-5 whitespace-nowrap">
              Lucio Gonzalez
            </td>
            <td class="text-sm font-bold py-5 pr-5 whitespace-nowrap">
              Ezequiel Gonzalez
            </td>
            <td
              class="text-sm font-semibold text-center py-5 pr-5 whitespace-nowrap"
            >
              <span
                class="text-sm text-blue-500 bg-blue-100 rounded-md px-3 py-1 font-semibold whitespace-nowrap"
                >008AR.318.005665
                <span class="text-blue-950">:</span> 24AR031254H</span
              >
            </td>
            <td
              class="text-sm font-semibold text-center py-5 pr-5 whitespace-nowrap"
            >
              Buenos Aires, ARG : Talagante, CHL
            </td>
            <td class="text-sm font-bold py-5 pr-5 whitespace-nowrap">
              SOC INVERSIONES
            </td>
            <td class="py-5 pr-4 lg:pr-2">
              <span
                class="text-sm text-green-500 bg-green-100 rounded-md px-3 py-1 font-semibold whitespace-nowrap"
                >Pago</span
              >
            </td>
            <td class="py-5">
              <router-link
                :to="'/viajes/select/' + 'AMG-12312312'"
                class="bg-gray-200 flex justify-center items-center w-7 h-7 rounded-full"
              >
                <i class="bx bx-chevron-right text-lg text-slate-400"></i>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex items-center justify-center mt-6 text-white">
      <button class="p-2 border rounded-tl-md rounded-bl-md w-10 bg-slate-500">
        <i class="bx bx-chevron-left"></i>
      </button>
      <input
        @keypress.enter="console.log(5)"
        class="p-2 border-t border-b text-center w-10 bg-slate-500"
        value="5"
      />
      <button class="p-2 border rounded-tr-md rounded-br-md w-10 bg-slate-500">
        <i class="bx bx-chevron-right"></i>
      </button>
    </div>
  </div>
</template>
