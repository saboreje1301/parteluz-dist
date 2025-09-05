<template>
    <section class="min-h-screen bg-gray-50 py-24 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h1>
          <p class="text-gray-600 text-lg">Nos encantaría saber más de tu proyecto y ayudarte a hacerlo realidad.</p>
        </div>
  
        <form class="bg-white p-8 rounded-2xl shadow-md space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700">Nombre completo</label>
              <input type="text" class="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-black focus:border-black" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Correo electrónico</label>
              <input type="email" class="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-black focus:border-black" />
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700">Asunto</label>
              <input type="text" class="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-black focus:border-black" />
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea rows="5" class="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-black focus:border-black"></textarea>
            </div>
          </div>
  
          <div class="text-center">
            <button type="submit" class="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Enviar mensaje
            </button>
          </div>
        </form>
  
        <div class="text-center mt-12 text-gray-500">
          También puedes escribirnos directamente a <a href="mailto:contacto@parteluz.mx" class="text-black font-medium hover:underline">contacto@parteluz.mx</a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No requiere lógica adicional por ahora
  </script>
  