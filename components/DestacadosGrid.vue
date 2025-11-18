<template>
  <section id="proyectos" class="py-20 px-4 md:px-20">
    <h2 class="text-3xl font-serif font-semibold text-center mb-6">
      Proyectos de Arquitectura en San Miguel de Allende
    </h2>
    <p class="text-center text-lg text-gray-700 mb-12">
      Descubre cómo la creatividad de nuestro estudio de arquitectura materializa la visión de nuestros clientes, transformando espacios en arte funcional.
    </p>

    <div class="grid md:grid-cols-3 gap-8">
      <ProjectCard
        v-for="project in projects.slice(0, 3)" 
        :key="project.id"
        :image="project.image"
        :title="project.title"
        :alt="project.alt"
        :description="project.description"
        :images="project.images"
      />
    </div>

    <div class="text-center mt-12">
      <NuxtLink to="/portafolio" class="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition">
        Ver todos los proyectos
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProjectCard from './ProjectCard.vue'

const projects = ref([])

onMounted(async () => {
  const response = await fetch('/data/projects.json')
  projects.value = await response.json()
})
</script>
