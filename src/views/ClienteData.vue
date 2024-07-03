<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { empresaStore } from "../stores/empresa.store";

const route = useRoute();
const router = useRouter();

const id = route.params.id;

const empresa = empresaStore();

const cliente = ref(null);

(async () => {
  cliente.value = await empresa.getOneEmpresa({ type: "cliente", id });
})();

const deleteEmpresa = async () => {
  const deleted = await empresa.deleteEmpresa({
    type: "cliente",
    id: cliente.value?._id,
  });

  if (deleted) router.push("/clientes");
};
</script>

<template>
  <div>
    <div>
      <!-- boton de añadir Unidades ya sea tractor o semi, boton para editar transporte y boton para eliminar transporte -->
      <div class="w-full flex gap-2 justify-end mb-6">
        <router-link
          class="flex items-center bg-yellow-600 text-white gap-2 px-4 py-2 rounded-md"
          :to="'/edit/cliente/' + cliente?._id"
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

    <!-- contenidos -->
    <section
      class="border border-dashed p-4 rounded-lg shadow-md bg-white overflow-auto w-full"
    >
      {{ cliente?.id_tributaria }} {{ cliente?.empresa }}
    </section>
  </div>
</template>
