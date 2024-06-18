<script setup></script>

<template>
  <div>
    <!-- botones de añadir y actualizar -->
    <div class="w-full flex gap-2 justify-end mb-6">
      <router-link
        to="/new/transporte"
        class="flex items-center bg-green-700 text-white gap-2 px-4 py-2 rounded-md"
      >
        <i class="bx bx-plus"></i>Añadir
      </router-link>
      <button
        class="flex items-center bg-gray-800 text-white gap-2 px-4 py-2 rounded-md"
      >
        <i class="bx bx-loader-alt"></i>Actualizar
      </button>
    </div>

    <!-- tabla de contenidos -->
    <div
      class="border border-dashed p-4 rounded-lg shadow-md bg-white overflow-x-auto w-full"
    >
      <table
        class="my-0 align-middle text-dark border-neutral-200 border-collapse w-full"
      >
        <thead>
          <tr class="font-semibold text-[0.95rem] text-slate-500">
            <th class="pb-3 text-start">Razon Social</th>
            <th class="pb-3 text-start">CUIT</th>
            <th class="pb-3 text-start">Unidades</th>
          </tr>
        </thead>
        <tbody class="text-slate-800 w-full">
          <tr
            class="border-b border-dashed last:border-b-0"
            v-for="num in 10"
            :key="num"
          >
            <td class="text-sm font-bold py-5 pr-5-whitespace-nowrap">
              PANTONE BLANCA NIEVES
            </td>
            <td class="text-sm font-semibold py-5 pr-5-whitespace-nowrap">
              <span
                class="text-sm text-green-500 bg-green-100 rounded-md px-3 py-1 font-semibold whitespace-nowrap"
              >
                20-30300300-3
              </span>
            </td>
            <td class="text-sm font-semibold py-5 pr-5-whitespace-nowrap">
              <span
                class="text-sm text-blue-500 bg-blue-100 rounded-md px-3 py-1 font-semibold whitespace-nowrap"
              >
                10
              </span>
            </td>
            <td class="py-5">
              <router-link
                :to="'test'"
                class="bg-gray-200 flex justify-center items-center w-7 h-7 rounded-full"
              >
                <i class="bx bx-chevron-right text-lg text-slate-400"></i>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
