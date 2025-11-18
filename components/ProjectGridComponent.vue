<template>
  <section id="proyectos" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">

      <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        
        <CardComponent 
          v-for="project in localProjects" 
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
      <div v-if="pending && localProjects.length === 0" class="text-center p-8">Cargando proyectos...</div>   
    </div>
  </section>
</template>

<script setup>
import { ref, watchEffect, onMounted } from 'vue'


const { data: projects, pending, error } = useAsyncData(
  'projectsData',
  () => $fetch('/data/projects.json')
)


// Usar un estado compartido para cachear los proyectos y evitar parpadeos
const projectsCache = useState('projectsCache', () => null)

// Fallback reactivo local (asegura que template siempre reciba un array)
const localProjects = ref([])

watchEffect(() => {
  if (projects && projects.value) {
    // actualizar cache y local
    projectsCache.value = Array.isArray(projects.value) ? projects.value : []
    localProjects.value = projectsCache.value
  } else if (projectsCache.value) {
    // mientras se refetch o en navegación cliente, usar cache existente
    localProjects.value = projectsCache.value
  }
})

onMounted(() => {
  if ((projects && projects.value === null) && localProjects.value.length === 0) {
    (async () => {
      try {
        console.log('[debug] ProjectGridComponent fallback fetch /data/projects.json')
        const res = await $fetch('/data/projects.json')
        const arr = Array.isArray(res) ? res : []
        projectsCache.value = arr
        localProjects.value = arr

      } catch (e) {
        console.error('[debug] ProjectGridComponent fallback fetch failed', e)
      }
    })()
  }
})

</script>




      