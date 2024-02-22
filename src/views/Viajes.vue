<template>
  <div
    class="overflow-x-auto w-full max-w-full border border-dashed p-2 rounded-md"
  >
    <table
      class="my-0 overflow-x-scroll w-full max-w-full align-middle text-dark border-neutral-200"
    >
      <thead>
        <tr class="font-semibold text-[0.95rem] text-slate-500">
          <th class="pb-3 text-start">N° Contrato</th>
          <th class="pb-3 text-start">Fletero</th>
          <th class="pb-3 text-start">CRT : MIC</th>
          <th class="pb-3 text-start">Origen : Destino</th>
          <th class="pb-3 text-start">Cliente</th>
          <th class="pb-3 text-start">Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" class="border-b border-dashed last:border-b-0">
          <td class="text-sm font-semibold text-slate-800 py-5 pr-5">
            AMG-12312312
          </td>
          <td
            class="text-sm font-semibold text-slate-800 py-5 pr-5 whitespace-nowrap"
          >
            Lucio Gonzalez
          </td>
          <td
            class="text-sm font-semibold text-slate-800 py-5 pr-5 whitespace-nowrap"
          >
            008AR.318.005665 : 24AR031254H
          </td>
          <td
            class="text-sm font-semibold text-slate-800 py-5 pr-5 whitespace-nowrap"
          >
            Buenos Aires, ARG : Talagante, CHL
          </td>
          <td
            class="text-sm font-semibold text-slate-800 py-5 pr-5 whitespace-nowrap"
          >
            SOC INVERSIONES
          </td>
          <td class="py-5 pr-4 lg:pr-2">
            <span
              class="text-sm text-red-500 bg-red-100 rounded-md px-3 py-1 font-semibold whitespace-nowrap"
              >En Transito</span
            >
          </td>
          <td class="py-5">
            <button class="bg-gray-200 w-7 h-7 rounded-full">
              <i class="bx bx-chevron-right text-lg text-slate-400"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
