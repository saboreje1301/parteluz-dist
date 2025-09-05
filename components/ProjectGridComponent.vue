<template>
  <section id="proyectos" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12">Nuestras Proyectos</h2>
      <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  
        
          <CardComponent v-for="project in projects" :key="project.id"
            :id="project.id"
  :title="project.title"
  :image="project.image"
  :alt="project.title"
  :description="project.description"
  :images="project.images"
  :category="project.category"
  :year="project.year"
          />
        

      </div>
    </div>
  </section>
</template>

<script setup>

import { ref, onMounted } from 'vue'

const projects = ref([])

onMounted(async () => {
  try {
    projects.value = await $fetch('/data/projects.json')
  } catch (error) {
  }
})

</script>




      