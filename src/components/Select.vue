<script setup>
import { defineProps, computed, ref } from "vue";

const valueInput = ref("");

// props
const props = defineProps({
  inputLabel: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  results: {
    type: Array,
    required: true,
    default: () => [],
  },
  // objecto seleccionado
  selected: {
    type: String,
    required: true,
    default: "",
  },
  secundarySelected: {
    type: String,
    required: false,
    default: "",
  },
  loading: {
    type: Boolean,
    required: true,
    default: false,
  },
});

// id for input and label for
const id = computed(() => props.inputLabel.toLowerCase().replace(" ", "-"));

const emit = defineEmits(["select", "search"]);

const requiredClass = computed(() =>
  props.required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ""
);

const emitSelectResult = (result) => {
  valueInput.value = "";
  emit("select", result);
};
</script>

<template>
  <!-- input que al escribir vaya mostrando los resultados segun una peticion API rest -->
  <div class="flex flex-col">
    <label class="mb-2" :for="id"
      ><span :class="requiredClass">{{ inputLabel }}</span
      ><span
        v-if="selected !== ''"
        class="text-sm text-green-500 bg-green-100 rounded-md px-3 py-1 ml-4 font-semibold whitespace-nowrap"
        >{{ selected }}</span
      ><span
        v-if="secundarySelected !== ''"
        class="text-sm text-slate-500 bg-slate-100 rounded-md px-3 py-1 ml-2 font-semibold whitespace-nowrap"
        >{{ secundarySelected }}</span
      >
    </label>

    <!-- emitir funcion search a medida que se va escribiendo -->
    <div class="w-full relative">
      <input
        @input="$emit('search', valueInput)"
        v-model="valueInput"
        class="p-2 border rounded-md w-full"
        type="text"
        :id="id"
        :placeholder="'Escribe para buscar ' + inputLabel.toLowerCase()"
      />

      <button
        @click="valueInput = ''"
        v-show="valueInput !== ''"
        class="absolute right-0 top-0 p-2"
      >
        <i class="bx bx-x text-xl"></i>
      </button>

      <div
        v-show="results.length > 0 && valueInput !== ''"
        class="absolute top-12 w-full bg-white border rounded-md shadow-lg max-h-56 overflow-auto z-10"
      >
        <div
          v-if="loading"
          class="w-full h-full bg-white bg-opacity-50 flex items-center justify-center"
        >
          <i class="bx bx-loader-alt animate-spin text-2xl text-gray-500"></i>

          <span class="ml-2 text-gray-500">Cargando...</span>
        </div>
        <ul v-else>
          <li
            v-for="result in results"
            :key="result._id"
            @click="emitSelectResult(result)"
            class="p-2 cursor-pointer hover:bg-gray-100"
          >
            {{ result.empresa }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
