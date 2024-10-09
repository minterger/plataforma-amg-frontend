<script setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits(["saveUnidad"]);

const form = ref({
  patente: "",
  marca: "",
  modelo: "",
  año: "",
  tipo: "",
});

function submitForm() {
  console.log(form.value);
  emit("saveUnidad", form.value);
}
</script>

<template>
  <div>
    <div class="w-full flex gap-2 justify-end mb-6">
      <button
        @click="submitForm"
        class="flex items-center bg-green-700 text-white gap-2 px-4 py-2 rounded-md"
      >
        <i class="bx bx-save"></i> Guardar
      </button>
    </div>
    <div
      class="border border-dashed p-4 rounded-lg shadow-md bg-white overflow-auto w-full"
    >
      <h2 class="text-center font-semibold text-2xl pt-4 pb-2">
        Datos del Unidades
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 border-b pb-4">
        <div class="flex flex-col">
          <label
            class="mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
            for="patente"
            >Patente</label
          >
          <input
            class="p-2 border rounded-md"
            type="text"
            v-model="form.patente"
            id="patente"
            placeholder="Ej: AA 000 AA"
          />
        </div>

        <div class="flex flex-col">
          <label
            for="marca"
            class="mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
            >Marca</label
          ><input
            class="p-2 border rounded-md"
            type="text"
            v-model="form.marca"
            id="marca"
            placeholder="Ej: Iveco"
          />
        </div>

        <div class="flex flex-col">
          <label
            for="año"
            class="mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
            >Año</label
          ><input
            class="p-2 border rounded-md"
            type="text"
            v-model="form.año"
            id="año"
            placeholder="Ej: 2015"
          />
        </div>

        <div class="flex flex-col">
          <label
            for="modelo"
            class="mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
            >Modelo</label
          ><input
            class="p-2 border rounded-md"
            type="text"
            v-model="form.modelo"
            id="modelo"
            placeholder="Ej: Hi-Way"
          />
        </div>
      </div>
    </div>
  </div>
</template>
