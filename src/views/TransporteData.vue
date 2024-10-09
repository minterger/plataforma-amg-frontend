<script setup>
import { empresaStore } from "../stores/empresa.store";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const router = useRouter();

const id = route.params.id;

const empresa = empresaStore();

const transporte = ref(null);

(async () => {
  transporte.value = await empresa.getOneEmpresa({ type: "transporte", id });
})();

const deleteEmpresa = async () => {
  const deleted = await empresa.deleteEmpresa({
    type: "transporte",
    id: transporte.value?._id,
  });

  if (deleted) router.push("/transportes");
};
</script>

<template>
  <div>
    <div>
      <!-- boton de añadir Unidades ya sea tractor o semi, boton para editar transporte y boton para eliminar transporte -->
      <div class="w-full flex gap-2 justify-end mb-6">
        <router-link
          to="/new/transporte"
          class="flex items-center bg-green-700 text-white gap-2 px-4 py-2 rounded-md"
        >
          <i class="bx bx-plus"></i>Añadir Unidad</router-link
        >
        <router-link
          class="flex items-center bg-yellow-600 text-white gap-2 px-4 py-2 rounded-md"
          :to="'/edit/transporte/' + transporte?._id"
        >
          <i class="bx bx-edit"></i>Editar
        </router-link>
        <button
          class="flex items-center bg-red-800 text-white gap-2 px-4 py-2 rounded-md"
          @click="deleteEmpresa"
        >
          <i class="bx bx-trash"></i>Eliminar
        </button>
      </div>
    </div>

    <!-- tabla de contenidos -->
    <section
      class="border border-dashed p-4 rounded-lg shadow-md bg-white overflow-x-auto w-full"
    >
      <div
        class="w-full flex items-center justify-center text-xl font-semibold"
      >
        <span>{{ transporte?.empresa }} - {{ transporte?.id_tributaria }}</span>
      </div>
    </section>
  </div>
</template>
