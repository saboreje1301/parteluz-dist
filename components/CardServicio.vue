<template>
  <div class="flex flex-col md:flex-row rounded-xl shadow-md overflow-hidden bg-gray-100">
    <!-- Imagen a la izquierda en desktop, arriba en móvil -->
    <div class="md:w-1/2 w-full p-4">
      <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ title }}</h3>
      <img
        :src="image"
        :alt="title"
        class="w-full md:h-full object-cover"
      />
    </div>
    <!-- Contenido -->
    <div class="md:w-1/2 w-full p-8 flex flex-col justify-center">
      
      <p class="text-gray-800 text-lg font-semibold">{{ description }}</p>


    </div>
  </div>

</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
});
</script>








