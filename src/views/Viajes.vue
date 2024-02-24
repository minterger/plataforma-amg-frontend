<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const routerPush = (id) => {
  router.push("/viajes/" + id);
};
</script>

<template>
  <div
    class="overflow-x-auto w-full max-w-full border border-dashed p-4 rounded-lg shadow-md bg-white"
  >
    <table
      class="my-0 w-full max-w-full align-middle text-dark border-neutral-200"
    >
      <thead class="max-w-full">
        <tr class="font-semibold text-[0.95rem] text-slate-500">
          <th class="pb-3 text-start">N° Contrato</th>
          <th class="pb-3 text-start">Fletero</th>
          <th class="pb-3 text-start">Chofer</th>
          <th class="pb-3 text-center">CRT : MIC</th>
          <th class="pb-3 text-center">Origen : Destino</th>
          <th class="pb-3 text-start">Cliente</th>
          <th class="pb-3 text-start">Estado</th>
        </tr>
      </thead>
      <tbody class="text-slate-800 max-w-full">
        <tr
          v-for="i in 10"
          class="border-b border-dashed last:border-b-0"
          @click="routerPush('AMG-12312312' + i)"
        >
          <td class="text-sm font-semibold py-5 pr-5 whitespace-nowrap">
            AMG-12312312
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
              :to="'/viajes/' + 'AMG-12312312'"
              class="bg-gray-200 flex justify-center items-center w-7 h-7 rounded-full"
            >
              <i class="bx bx-chevron-right text-lg text-slate-400"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
