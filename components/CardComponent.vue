<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <!-- Imagen principal -->
    <img
      :src="image"
      :alt="alt"
      class="rounded-lg mb-4 object-cover w-full h-48"
    />

    <!-- Info -->
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-500 mb-4">{{ description }}</p>
    <p class="text-m text-gray-800 mb-4">{{ category }} - {{ year }}</p>

    <!-- Botón Ver más -->
    <button
      class="text-sm font-medium text-primary hover:underline"
      @click="openCarousel"
    >
      Ver más →
    </button>

    <!-- Modal con transición -->
    <transition name="fade">
      <div
        v-if="showCarousel"
        class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 overflow-auto"
      >
        <transition name="scale-fade">
          <div
            class="bg-white rounded-lg max-w-4xl w-full p-4 relative"
            v-show="showCarousel"
          >
            
            <!-- Carousel -->
            <CarouselImage
              :images="images"
              :alt="title"
              @close="closeCarousel"
            />
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CarouselImage from './CarouselImage.vue'

const props = defineProps({
  id: String,
  title: String,
  image: String,
  alt: String,
  description: String,
  images: Array, // 👈 viene directo de projects.json
  imageset: String,
  category: String,
  year: Number
})

const showCarousel = ref(false)

const openCarousel = () => {
  showCarousel.value = true
}
const closeCarousel = () => {
  showCarousel.value = false
}
</script>

<style scoped>
/* Transición modal */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.scale-fade-enter-active, .scale-fade-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.scale-fade-enter-from, .scale-fade-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
</style>





