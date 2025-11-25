<template>
  <section id="proyecto-detalle" class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <div v-if="pending" class="text-center p-8 text-gray-500">Cargando proyecto...</div>

      <div v-else-if="error" class="text-center p-8 text-red-600">Error al cargar los proyectos.</div>

      <div v-else-if="!project">
        <div class="text-center py-20">
          <h2 class="text-2xl font-bold mb-4">Proyecto no encontrado</h2>
          <p class="text-gray-600 mb-6">No encontramos el proyecto que buscas. Puedes volver al portafolio para ver la lista completa.</p>
          <NuxtLink to="/portafolio" class="px-6 py-3 bg-gray-800 text-white rounded-lg">Volver al portafolio</NuxtLink>
        </div>
      </div>

      <article v-else class="prose mx-auto">
        <NuxtLink to="/portafolio" class="text-sm text-primary hover:underline">← Volver al portafolio</NuxtLink>
        <h3 class="text-3xl font-extrabold mt-4">{{ project.title }}</h3>
        <p class="text-sm text-gray-500">{{ project.category }} — {{ project.year }}</p>



        <section class="mt-6">
          <h2 class="text-xl font-semibold">Descripción</h2>
          <p class="text-gray-700">{{ project.description }}</p>
        </section>

        <section v-if="project.images && project.images.length" class="mt-6">
          <h3 class="font-semibold">Imágenes del proyecto</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <NuxtImg v-for="(img, i) in project.images" :key="i" :src="img" :alt="project.title + ' imagen ' + (i+1)" class="w-full h-48 object-cover rounded" />
          </div>
        </section>

      </article>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from '#imports'
import { computed } from 'vue'

const route = useRoute()

const { data: projects, pending, error } = await useAsyncData(
  'projectsData',
  () => $fetch('/data/projects.json')
)

const projectId = computed(() => route.params.id)

const project = computed(() => {
  if (!projects || !projects.value) return null
  return projects.value.find(p => String(p.id) === String(projectId.value)) || null
})

useHead(() => ({
  title: project.value ? `${project.value.title} | Portafolio` : 'Proyecto | Portafolio'
}))
</script>





