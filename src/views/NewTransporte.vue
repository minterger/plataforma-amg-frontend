<script setup>
import NewEmpresa from "../components/NewEmpresa.vue";
import { empresaStore } from "../stores/empresa.store";

const empresa = empresaStore();

const saveTransporte = async (empresaName, id_tributaria) => {
  await empresa.newEmpresa({
    empresa: empresaName,
    id_tributaria,
    type: "transporte",
  });
};
</script>

<template>
  <NewEmpresa @save="saveTransporte" datos_de="Transporte" />
</template>
