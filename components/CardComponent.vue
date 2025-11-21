<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    
    <!-- Usar NuxtLink nativo; no prevenir el click para evitar bloquear la navegación SPA -->
    <NuxtLink :to="`/portafolio/${id}`">
      <img
        :src="image"
        :alt="alt"
        class="rounded-lg mb-4 object-cover w-full h-48 hover:opacity-90 transition-opacity"
      />
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-m text-gray-800 mb-4">{{ category }} - {{ year }}</p>
      <p class="text-gray-500 mb-4">{{ description }}</p>
    </NuxtLink>

  </div>
</template>

<script setup>
const props = defineProps({
  id: [String, Number],
  title: String,
  image: String,
  alt: String,
  description: String,
  category: String,
  year: [String, Number]
});
</script>





