<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-6">
    <main class="max-w-3xl w-full text-center">
      <h1 class="text-5xl font-extrabold text-gray-900 mb-4">404</h1>
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">Página no encontrada</h2>
      <p class="text-gray-600 mb-6">Lo sentimos — la página que buscas no existe o ha sido movida. Aquí tienes algunas opciones:</p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center mb-8">
        <NuxtLink to="/" class="px-6 py-3 bg-black text-white rounded-lg font-medium">Ir al inicio</NuxtLink>
        <NuxtLink to="/portafolio" class="px-6 py-3 border border-gray-300 rounded-lg font-medium">Ver portafolio</NuxtLink>
        <NuxtLink to="/contacto" class="px-6 py-3 text-gray-700 underline rounded-lg">Contactar</NuxtLink>
      </div>
      <p class="text-sm text-gray-500">Si crees que esto es un error, por favor <NuxtLink to="/contacto" class="underline">avísanos</NuxtLink> y lo revisaremos.</p>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'Página no encontrada | ParteLuz Arquitectura',
  meta: [
    { name: 'robots', content: 'noindex,follow' },
    { name: 'description', content: 'Página 404 - ParteLuz Arquitectura. La página solicitada no se encontró.' }
  ]
})
</script>
