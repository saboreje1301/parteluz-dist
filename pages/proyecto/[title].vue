<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const projectT = route.params.title
const project = ref(null)
const error = ref(null)
const imageCount = 5
const imageset = project.imageset
const images = Array.from({ length: imageCount }, (_, i) => `${i + 1}.webp`)

onMounted(async () => {
  try {
    const projects = await $fetch('/data/projects.json')
    project.value = projects.find(p => String(p.id) === projectT)
    if (!project.value) {
      error.value = `No se encontró un proyecto con el id: ${projectT}`
    }
  } catch (err) {
    error.value = 'Error al cargar los datos del servidor.'
  }
})


// Actualiza los metadatos cuando el proyecto esté disponible
watchEffect(() => {
  if (project.value) {
    useHead({
      title: `${project.value.title} | Proyectos | Parteluz Arquitectura`,
      meta: [
        { name: 'description', content: `Detalles del proyecto ${project.value.title} realizado por Parteluz Arquitectura en San Miguel de Allende.` },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `${project.value.title} | Proyectos | Parteluz Arquitectura` },
        { property: 'og:description', content: `Conoce el proyecto ${project.value.title} y su proceso de diseño y construcción.` },
        { property: 'og:image', content: project.value.image || '/img/200414.webp' },
        { property: 'og:type', content: 'article' }
      ]
    })
  }
})

</script>

<template>
  <div class="max-w-4xl mx-auto py-10 px-4">
    <h1 class="text-3xl font-bold mb-6">Detalle del Proyecto</h1>

    <div v-if="error" class="text-red-500">
      <p>{{ error }}</p>
    </div>

    <div v-else-if="project">
      <h2 class="text-2xl font-semibold mb-4">{{ project.title }}</h2>
      <p class="text-gray-700 mb-4">{{ project.description }}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
    <img
      v-for="img in images"
      :key="img"
      :src="imageset + img"
      :alt="img"
      class="w-full h-64 object-cover rounded shadow"
    />
      </div>
    </div>

    <div v-else class="text-gray-500">
      <p>Cargando proyecto...</p>
    </div>
  </div>
</template>





