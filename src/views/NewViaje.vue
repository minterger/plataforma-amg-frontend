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
              class="p-2 border rounded-md"
              type="text"
              id="mic"
              placeholder="EJ: 24AR000000L"
            />
          </div>

          <div class="flex flex-col">
            <label class="mb-2" for="crt">Numero de CRT</label>
            <input
              class="p-2 border rounded-md"
              type="text"
              id="crt"
              placeholder="EJ: 0003.AR.00213"
            />
          </div>
          <div class="flex flex-col md:col-span-2">
            <label class="mb-2" for="client">Cliente</label>
            <input
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
            <label class="mb-2" for="origen">Origen</label>
            <input
              class="p-2 border rounded-md"
              type="text"
              id="origen"
              placeholder="EJ: Buenos Aires, Argentina"
            />
          </div>

          <div class="flex flex-col">
            <label class="mb-2" for="destino">Destino</label>
            <input
              class="p-2 border rounded-md"
              type="text"
              id="destino"
              placeholder="EJ: Padahuel, Chile"
            />
          </div>

          <div class="flex flex-col md:col-span-2">
            <label class="mb-2" for="mercaderia">Mercaderia</label>
            <input
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
            <label class="mb-2" for="value">Valor Flete</label>
            <input
              class="p-2 border rounded-md"
              type="text"
              id="value"
              placeholder="EJ: 1800"
            />
          </div>
          <div class="flex flex-col">
            <label class="mb-2" for="money">Moneda</label>
            <input
              class="p-2 border rounded-md"
              type="text"
              id="money"
              placeholder="EJ: USD"
            />
          </div>
          <div class="flex flex-col">
            <label class="mb-2" for="razon">Razon Social a Facturar</label>
            <input
              class="p-2 border rounded-md"
              type="text"
              id="razon"
              placeholder="EJ: Pantone Blanca Nieves"
            />
          </div>
          <div class="flex flex-col">
            <label class="mb-2" for="pago">Condicion de pago</label>
            <input
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
