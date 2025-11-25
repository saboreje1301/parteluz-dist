<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold text-gray-800 mb-4">Últimos Artículos</h2>
      <p class="text-lg text-gray-600 mb-12">
        Conoce más sobre nuestras ideas, proyectos y reflexiones en arquitectura.
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left"
        >
          <img :src="post.image" class="w-full h-48 object-cover rounded-xl mb-4" />
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ post.title }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ post.excerpt }}</p>
          <a
            :href="post.link"
            target="_blank"
            rel="noopener"
            class="text-sm font-medium text-black hover:underline"
          >
            Leer más →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script setup>

import { ref, onMounted } from 'vue'

const posts = ref([])

useHead({
  title: 'Arquitectos en San Miguel de Allende',
  meta: [
    { name: 'description', content: 'Somos una firma dedicada a la arquitectura, el diseño y la construcción en San Miguel de Allende.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Blog | Parteluz Arquitectura' },
    { property: 'og:description', content: 'Lee nuestros artículos y consejos sobre arquitectura y construcción.' },
    { property: 'og:image', content: '/img/200414.webp' },
    { property: 'og:type', content: 'website' }
  ]
})

onMounted(async () => {
  try {
    const response = await fetch('/data/blog.json') // Ruta al archivo JSON
    posts.value = await response.json()
  } catch (error) {
    console.error('Error al cargar los artículos del blog:', error)
  }
})

  </script>
  
  <style scoped></style>