<script setup>
import { reactive, ref, watch } from "vue";
import Select from "../components/Select.vue";
import { empresaStore } from "../stores/empresa.store";

const empresa = empresaStore();

const manifiesto = reactive({
  mic: "",
  crt: "",
});

const cliente = reactive({
  _id: "",
  empresa: "",
  id_tributaria: "",
});

const dataCliente = ref({});

const searchCliente = async (value) => {
  empresa.isLoadingEmpresas = true;
  dataCliente.value = await empresa.getEmpresas({
    type: "cliente",
    filter: "empresa",
    search: value,
  });
};

const selectClient = (client) => {
  cliente._id = client._id;
  cliente.empresa = client.empresa;
  cliente.id_tributaria = client.id_tributaria;
};

const remito = ref("");

const viaje = reactive({
  origen: "",
  destino: "",
  mercaderia: "",
});

const contratacion = reactive({
  valor_flete: 0,
  tipo_moneda: "",
  razon_social_facturacion: "",
  condicion_pago: "",
});

// evitar que valor_flete no sea negativo
watch(
  () => contratacion.valor_flete,
  (newValue, oldValue) => {
    if (newValue < 0) {
      contratacion.valor_flete = oldValue;
    }
  }
);

// mismo que cliente pero con transporte
const transporte = reactive({
  _id: "",
  empresa: "",
  id_tributaria: "",
});

const dataTransporte = ref({});

const searchTransporte = async (value) => {
  empresa.isLoadingEmpresas = true;
  dataTransporte.value = await empresa.getEmpresas({
    type: "transporte",
    filter: "empresa",
    search: value,
  });
};

const selectTransporte = (client) => {
  transporte._id = client._id;
  transporte.empresa = client.empresa;
  transporte.id_tributaria = client.id_tributaria;
};

const descripcion = ref("");
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
        <!-- -------------------- -->
        <!-- Datos del manifiesto -->
        <!-- -------------------- -->
        <h2 class="text-center font-semibold text-2xl pt-4 pb-2">
          Datos de Manifiesto
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 border-b pb-4">
          <div class="flex flex-col">
            <label class="mb-2" for="mic">Numero de MIC</label>
            <input
              v-model="manifiesto.mic"
              class="p-2 border rounded-md"
              type="text"
              id="mic"
              placeholder="EJ: 24AR000000L (opcional)"
            />
          </div>

          <div class="flex flex-col">
            <label class="mb-2" for="crt">Numero de CRT</label>
            <input
              v-model="manifiesto.crt"
              class="p-2 border rounded-md"
              type="text"
              id="crt"
              placeholder="EJ: 0003.AR.00213 (opcional)"
            />
          </div>

          <div class="flex flex-col">
            <label class="mb-2" for="remito">Remito</label>
            <input
              v-model="remito"
              class="p-2 border rounded-md"
              type="text"
              id="remito"
              placeholder="EJ: 0-00001234 (opcional)"
            />
          </div>

          <div class="flex flex-col">
            <!-- <label
              class="mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
              for="client"
              >Cliente</label
            > -->
            <!-- <input
              v-model="manifiesto.cliente"
              class="p-2 border rounded-md"
              type="text"
              id="client"
              placeholder="EJ: SOC INVERSIONES"
            /> -->
            <Select
              input-label="Cliente"
              :required="true"
              :selected="cliente.empresa"
              :secundary-selected="cliente.id_tributaria"
              param-to-show="empresa"
              param-to-show-secundary="id_tributaria"
              :results="dataCliente.docs"
              :loading="empresa.isLoadingEmpresas"
              @search="searchCliente"
              @select="selectClient"
            />
          </div>
        </div>

        <!-- ---------------------------------------------------------------------- -->
        <!-- Datos de donde se realiza el viaje hasta dodne y que mercadeeria lleva -->
        <!-- ---------------------------------------------------------------------- -->
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
              v-model="viaje.origen"
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
              v-model="viaje.destino"
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
              v-model="viaje.mercaderia"
              class="p-2 border rounded-md"
              type="text"
              id="mercaderia"
              placeholder="EJ: Consolidado"
            />
          </div>
        </div>

        <!-- ------------------------------------------------------------------- -->
        <!-- Datos de la empresa a facturar y valor de flete + condicion de pago -->
        <!-- ------------------------------------------------------------------- -->
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
              v-model="contratacion.valor_flete"
              class="p-2 border rounded-md"
              type="number"
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
              v-model="contratacion.tipo_moneda"
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
              v-model="contratacion.razon_social_facturacion"
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
              v-model="contratacion.condicion_pago"
              class="p-2 border rounded-md"
              type="text"
              id="pago"
              placeholder="EJ: VTO DE PAGO A 30 DIAS"
            />
          </div>
        </div>

        <!-- --------------------------------------- -->
        <!-- Datos de la unidad que realiza el viaje -->
        <!-- --------------------------------------- -->
        <h2 class="text-center font-semibold text-2xl pt-4 pb-2">
          Empresa Contratada
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 border-b pb-4">
          <div class="flex flex-col">
            <Select
              input-label="Empresa Contratada"
              :required="true"
              :selected="transporte.empresa"
              :secundary-selected="transporte.id_tributaria"
              param-to-show="empresa"
              param-to-show-secundary="id_tributaria"
              :results="dataTransporte?.docs"
              :loading="empresa.isLoadingEmpresas"
              @search="searchTransporte"
              @select="selectTransporte"
            />
          </div>

          <div class="flex flex-col" v-show="transporte._id">
            <Select input-label="Patente Tractor" :required="true" />
          </div>

          <div class="flex flex-col" v-show="transporte._id">
            <Select input-label="Patente Semi" :required="true" />
          </div>
        </div>

        <!-- ---------------------------------- -->
        <!-- descripcion del viaje o aclaracion -->
        <!-- ---------------------------------- -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 border-b pb-4">
          <div class="flex flex-col col-span-2">
            <label
              class="mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
              for="descripcion"
              >Descripcion</label
            >

            <textarea
              v-model="descripcion"
              name="descripcion"
              id="descripcion"
              rows="4"
              placeholder="Descripcion del viaje o aclaracion"
              class="p-2 row-span-2 border rounded-md"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
