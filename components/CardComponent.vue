<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    
    <!-- Interceptar el click para capturar errores de navegación y logear el id -->
    <NuxtLink :to="`/portafolio/${id}`" @click.prevent="go">
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
// Ensure this remains clean
const props = defineProps({
  id: String,
  title: String,
  image: String,
  alt: String,
  description: String,
  category: String,
  year: Number
});

import { useRouter } from 'vue-router'
const router = useRouter()

function go (e) {
  router.push(`/portafolio/${props.id}`).catch(err => {
    try { alert('Error al navegar: ' + (err && err.message ? err.message : String(err))) } catch (_) {}
  })
}
</script>





