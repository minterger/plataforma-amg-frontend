<script setup>
import { reactive } from "vue";

const newViaje = reactive({
  mic: "",
  crt: "",
  cliente: "",
  origen: "",
  destino: "",
  mercaderia: "",
  valor_flete: undefined,
  tipo_moneda: "",
  razon_social_facturacion: "",
  condicion_pago: "",
});
</script>

<template>
  <div>
    <div class="w-full flex gap-2 justify-end mb-6">
      <button
        class="flex items-center bg-green-700 text-white gap-2 px-4 py-2 rounded-md"
      >
        <i class="bx bx-save"></i> Guardar
      </button>
    </div>

    <div
      class="border border-dashed p-4 rounded-lg shadow-md bg-white overflow-x-auto w-full"
    >
      <form @submit.prevent="">
        <h2 class="text-center font-semibold text-2xl pt-4 pb-2">
          Datos de Manifiesto
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 border-b pb-4">
          <div class="flex flex-col">
            <label class="mb-2" for="mic">Numero de MIC</label>
            <input
              v-model="newViaje.mic"
              class="p-2 border rounded-md"
              type="text"
              id="mic"
              placeholder="EJ: 24AR000000L"
            />
          </div>

          <div class="flex flex-col">
            <label class="mb-2" for="crt">Numero de CRT</label>
            <input
              v-model="newViaje.crt"
              class="p-2 border rounded-md"
              type="text"
              id="crt"
              placeholder="EJ: 0003.AR.00213"
            />
          </div>
          <div class="flex flex-col md:col-span-2">
            <label
              class="mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
              for="client"
              >Cliente</label
            >
            <input
              v-model="newViaje.cliente"
              class="p-2 border rounded-md"
              type="text"
              id="client"
              placeholder="EJ: SOC INVERSIONES"
            />
          </div>
        </div>

        <h2 class="text-center font-semibold text-2xl pt-4 pb-2">
          Datos de Viaje
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 border-b pb-4">
          <div class="flex flex-col">
            <label
              class="mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
              for="origen"
              >Origen</label
            >
            <input
              v-model="newViaje.origen"
              class="p-2 border rounded-md"
              type="text"
              id="origen"
              placeholder="EJ: Buenos Aires, Argentina"
            />
          </div>

          <div class="flex flex-col">
            <label
              class="mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
              for="destino"
              >Destino</label
            >
            <input
              v-model="newViaje.destino"
              class="p-2 border rounded-md"
              type="text"
              id="destino"
              placeholder="EJ: Padahuel, Chile"
            />
          </div>

          <div class="flex flex-col md:col-span-2">
            <label
              class="mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
              for="mercaderia"
              >Mercaderia</label
            >
            <input
              v-model="newViaje.mercaderia"
              class="p-2 border rounded-md"
              type="text"
              id="mercaderia"
              placeholder="EJ: Consolidado"
            />
          </div>
        </div>
        <h2 class="text-center font-semibold text-2xl pt-4 pb-2">
          Datos de Contratación
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 border-b pb-4">
          <div class="flex flex-col">
            <label
              class="mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
              for="value"
              >Valor Flete</label
            >
            <input
              v-model="newViaje.valor_flete"
              class="p-2 border rounded-md"
              type="text"
              id="value"
              placeholder="EJ: 1800"
            />
          </div>
          <div class="flex flex-col">
            <label
              class="mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
              for="money"
              >Moneda</label
            >
            <input
              v-model="newViaje.tipo_moneda"
              class="p-2 border rounded-md"
              type="text"
              id="money"
              placeholder="EJ: USD"
            />
          </div>
          <div class="flex flex-col">
            <label
              class="mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
              for="razon"
              >Razon Social a Facturar</label
            >
            <input
              v-model="newViaje.razon_social_facturacion"
              class="p-2 border rounded-md"
              type="text"
              id="razon"
              placeholder="EJ: Pantone Blanca Nieves"
            />
          </div>
          <div class="flex flex-col">
            <label
              class="mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
              for="pago"
              >Condicion de pago</label
            >
            <input
              v-model="newViaje.condicion_pago"
              class="p-2 border rounded-md"
              type="text"
              id="pago"
              placeholder="EJ: VTO DE PAGO A 30 DIAS"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
