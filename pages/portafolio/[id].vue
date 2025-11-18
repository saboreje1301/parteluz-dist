<template>
  <section id="proyectos" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
      
      <h2 class="text-4xl font-extrabold text-gray-900 mb-12 text-center">Nuestro Portafolio</h2>

      <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        
        <CardComponent 
          v-for="project in projects" 
          :key="project.id"
          :id="project.id"
          :title="project.title"
          :image="project.image"
          :alt="project.alt" 
          :description="project.description"
          :images="project.images"
          :category="project.category"
          :year="project.year"
        />

      </div>
      
      <div v-if="pending" class="text-center p-8 text-gray-500">
        <p>Cargando proyectos...</p>
      </div>
      <div v-else-if="error" class="text-center p-8 text-red-600">
        <p>Error al cargar los proyectos. Por favor, revisa la ruta del archivo JSON.</p>
      </div>
      <div v-else-if="!projects || projects.length === 0" class="text-center p-8 text-gray-500">
        <p>No hay proyectos disponibles en este momento.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHead } from '#app';

// ⭐️ Carga de TODOS los proyectos ⭐️
const { data: projects, pending, error } = await useAsyncData(
  'projectsData', // Clave única para Nuxt
  () => $fetch('/data/projects.json')
);

// Establecer el título de la página
useHead({
  title: 'Portafolio de Proyectos | ParteLuz Arquitectura',
});

// Nota: No es necesario hacer el chequeo de projects.value = [] aquí,
// ya que v-if y v-for manejan correctamente el valor null/undefined.
</script>





