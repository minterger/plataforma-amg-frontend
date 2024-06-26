<script setup>
import NewEmpresa from "../components/NewEmpresa.vue";
import { useRouter } from "vue-router";
import { empresaStore } from "../stores/empresa.store";

const router = useRouter();

const empresa = empresaStore();

const saveTransporte = async (empresaName, id_tributaria) => {
  const createSuccess = await empresa.newEmpresa({
    empresa: empresaName,
    id_tributaria,
    type: "transporte",
  });

  if (createSuccess) {
    router.push("/transportes");
  }
};
</script>

<template>
  <NewEmpresa @save="saveTransporte" datos_de="Transporte" />
</template>
