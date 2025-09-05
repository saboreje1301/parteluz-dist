<template>
  <NavigationBar></NavigationBar>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 pt-20 p-4 gap-4">
    <CardServicio
      v-for="servicio in servicios"
      :key="servicio.id"
      :id="servicio.id"
      :title="servicio.title"
      :image="servicio.image"
      :alt="servicio.alt"
      :description="servicio.description"
      :expandedId="expandedId"
      @toggle="handleToggle"
    />
  </div>

  <div class="p-3 text-center">
    <h2 class="text-3xl font-bold mb-4">¿Listo para transformar tu espacio?</h2>
    <p class="mb-6 text-lg">Contáctanos hoy mismo y da el primer paso hacia la casa de tus sueños.</p>
  <NuxtLink
        to="/contact"
        class="w-full bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition-colors text-center font-semibold p-4 mt-4">
        Contáctanos
      </NuxtLink>

  </div>

   <WhatsApp></WhatsApp>
  <AppFooter></AppFooter>
</template>

<script setup>
useHead({
  title: 'Servicios | Parteluz Arquitectura',
  meta: [
    { name: 'description', content: 'Descubre nuestros servicios de diseño arquitectónico, construcción y remodelación en San Miguel de Allende.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Servicios | Parteluz Arquitectura' },
    { property: 'og:description', content: 'Ofrecemos diseño, construcción y remodelación de espacios residenciales y comerciales.' },
    { property: 'og:image', content: '/img/og-servicios.webp' },
    { property: 'og:type', content: 'website' }
  ]
})

import { ref, onMounted } from 'vue';

const servicios = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('/data/servicios.json'); // Ruta al archivo JSON
    servicios.value = await response.json(); // Carga los datos en la variable `servicios`
  } catch (error) {
    console.error('Error al cargar los servicios:', error);
  }
});

</script>

<style scoped>
/* Animación para la transición */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>