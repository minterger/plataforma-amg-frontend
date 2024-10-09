<script setup>
import NewUnidadForm from "../components/NewUnidadForm.vue";
// Add your script setup content here
const saveUnidad = async (unidad, placa, tipo) => {
  console.log(unidad, placa, tipo);
};
</script>

<template>
  <NewUnidadForm @save="saveUnidad" datos_de="Unidad" />
</template>
