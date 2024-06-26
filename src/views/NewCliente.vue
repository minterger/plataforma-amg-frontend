<script setup>
import NewEmpresa from "../components/NewEmpresa.vue";
import { empresaStore } from "../stores/empresa.store";
import { useRouter } from "vue-router";

const router = useRouter();

const empresa = empresaStore();

const saveCliente = async (empresaName, id_tributaria) => {
  const createSuccess = await empresa.newEmpresa({
    empresa: empresaName,
    id_tributaria,
    type: "cliente",
  });

  if (createSuccess) {
    router.push("/clientes");
  }
};
</script>

<template>
  <NewEmpresa @save="saveCliente" datos_de="Cliente" />
</template>
