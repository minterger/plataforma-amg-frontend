<script setup>
import { defineProps } from "vue";
const props = defineProps(["datosDe"]);
</script>

<template>
  <div>
    <div class="w-full flex gap-2 justify-end mb-6">
      <button
        class="flex items-center bg-green-700 text-white gap-2 px-4 py-2 rounded-md"
      >
        <i class="bx bx-save"></i> Guardar
      </button>
    </div>
    <div
      class="border border-dashed p-4 rounded-lg shadow-md bg-white overflow-x-auto w-full"
    >
      <h2 class="text-center font-semibold text-2xl pt-4 pb-2">
        Datos del {{ datosDe }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 border-b pb-4">
        <div class="flex flex-col">
          <label
            class="mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
            for="name"
            >Nombre o Razon Social</label
          >
          <input
            class="p-2 border rounded-md"
            type="text"
            id="name"
            placeholder="Perez e Hijos S.A."
          />
        </div>

        <div class="flex flex-col">
          <label
            for="id_tributaria"
            class="mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
            >Id Tributaria</label
          ><input
            class="p-2 border rounded-md"
            type="text"
            id="id_tributaria"
            placeholder="CUIT, CUIL, RUT o segun corresponda"
          />
        </div>
      </div>
    </div>
  </div>
</template>
