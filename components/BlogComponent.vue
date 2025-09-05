<template>
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Últimos Artículos</h2>
        <p class="text-lg text-gray-600 mb-12">
          Conoce más sobre nuestras ideas, proyectos y reflexiones en arquitectura.
        </p>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="post in posts" :key="post.slug" class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left">
            <img v-if="post.cover" :src="post.cover" class="w-full h-48 object-cover rounded-xl mb-4" :alt="post.title">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ post.title }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ post.description }}</p>
            <NuxtLink :to="`/blog/${post.slug}`" class="text-sm font-medium text-black hover:underline">
              Leer más →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const { data: posts } = await useAsyncData('posts', () => $content('blog').sort({ createdAt: -1 }).fetch())
  </script>