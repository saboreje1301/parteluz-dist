<template>
  <div>


    <header class="pt-24 pb-8 px-4 text-center max-w-4xl mx-auto">
      <h2 class="text-4xl sm:text-5xl font-serif font-extrabold mb-4 text-gray-900">
        Servicios de Diseño Arquitectónico, Construcción y Remodelación en San Miguel de Allende
      </h2>
      <p class="text-xl text-gray-700">
        En ParteLuz Arquitectura ofrecemos soluciones integrales para tu proyecto, desde el concepto inicial hasta la entrega final de tu casa de lujo, restauración o remodelación.
      </p>
    </header>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 p-4 gap-4">
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
        to="/contacto" class="w-full bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-700 transition-colors text-center font-semibold p-4 mt-4 inline-block max-w-xs">
        Contáctanos
      </NuxtLink>
    </div>

  </div>
</template>

<script setup>
// ⭐️ Meta Tags de SEO Optimizados ⭐️
useHead({
  title: 'Servicios Diseño Arquitectónico, Construcción y Remodelación',
  meta: [
    { name: 'description', content: 'Descubre nuestros servicios de arquitectura en SMA: diseño de casas de lujo, construcción llave en mano, restauración colonial y remodelaciones integrales.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Servicios de Diseño Arquitectónico, Construcción y Remodelación en San Miguel de Allende' },
    { property: 'og:description', content: 'Ofrecemos diseño, construcción y remodelación de espacios residenciales y comerciales en San Miguel de Allende.' },
    { property: 'og:image', content: '/img/og-servicios.webp' },
    { property: 'og:type', content: 'website' }
  ]
})

// ⚠️ Usar useAsyncData o useFetch para SSR/SSG si es posible
// Se mantiene onMounted por ahora, pero se sugiere el cambio para mejor SEO.
import { ref, onMounted } from 'vue';
const expandedId = ref(null); // Añadido para que el componente CardServicio funcione

function handleToggle(id) {
  expandedId.value = expandedId.value === id ? null : id;
}

const servicios = ref([]);

onMounted(async () => {
  try {
    // Si estás usando Nuxt 3, considera usar useFetch aquí:
    // const { data: serviciosData } = await useFetch('/data/servicios.json');
    // servicios.value = serviciosData.value || [];
    
    const response = await fetch('/data/servicios.json'); 
    servicios.value = await response.json(); 
  } catch (error) {
    console.error('Error al cargar los servicios:', error);
  }
});

</script>