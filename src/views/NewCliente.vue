<script setup>
import NewEmpresa from "../components/NewEmpresa.vue";
import { empresaStore } from "../stores/empresa.store";

const empresa = empresaStore();

const saveCliente = async (empresaName, id_tributaria) => {
  await empresa.newEmpresa({
    empresa: empresaName,
    id_tributaria,
    type: "cliente",
  });
};
</script>

<template>
  <NewEmpresa @save="saveCliente" datos_de="Cliente" />
</template>
