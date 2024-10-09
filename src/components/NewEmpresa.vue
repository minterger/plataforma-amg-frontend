<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  datos_de: {
    type: String,
    required: true,
  },
});

const empresa = ref("");
const id_tributaria = ref("");

function formatString(value) {
  //lenght pero tomando solo los numeros de value

  if (value.length <= 9) {
    return value.replace(
      /(\d{2})(\d{3})(\d{3})(\d{1})?/,
      (match, $1, $2, $3, $4) => {
        let formatted = $1;
        if ($2) formatted += `.${$2}`;
        if ($3) formatted += `.${$3}`;
        if ($4) formatted += `-${$4}`;
        return formatted;
      }
    );
  } else if (value.length > 9 && value.length <= 11) {
    return value.replace(/(\d{2})(\d{8})?(\d{1})?/, (match, $1, $2, $3) => {
      let formatted = $1;
      if ($2) formatted += `-${$2}`;
      if ($3) formatted += `-${$3}`;
      return formatted;
    });
  } else {
    return value;
  }
}

watch(id_tributaria, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    if (newValue.length >= 20 || /[A-z]/.test(newValue)) {
      id_tributaria.value = oldValue;
      return;
    }
    const unformattedValue = newValue.replace(/\D/g, "");
    const formattedValue = formatString(unformattedValue);
    if (formattedValue !== id_tributaria.value) {
      id_tributaria.value = formattedValue;
    }
  }
});
</script>

<template>
  <div>
    <div class="w-full flex gap-2 justify-end mb-6">
      <button
        @click="$emit('save', empresa, id_tributaria)"
        class="flex items-center bg-green-700 text-white gap-2 px-4 py-2 rounded-md"
      >
        <i class="bx bx-save"></i> Guardar
      </button>
    </div>
    <div
      class="border border-dashed p-4 rounded-lg shadow-md bg-white overflow-x-auto w-full"
    >
      <h2 class="text-center font-semibold text-2xl pt-4 pb-2">
        Datos del {{ datos_de }}
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
            v-model="empresa"
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
            v-model="id_tributaria"
            id="id_tributaria"
            placeholder="CUIT, CUIL, RUT o segun corresponda"
          />
        </div>
      </div>
    </div>
  </div>
</template>
