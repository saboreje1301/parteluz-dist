<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <img :src="image" :alt="alt" class="rounded-lg mb-4 object-cover w-full h-48" />

    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-500 mb-4">{{ description }}</p>

    <button class="text-sm font-medium text-primary hover:underline" @click="openCarousel">
      Ver más →
    </button>

    <!-- Modal -->
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


          <!-- CarouselImage recibe las rutas completas -->
          <CarouselImage :images="images" :alt="title" 
          @close="closeCarousel"
          />
        </div>
      </transition>
      </div>
    </transition>
  </div>
</template>

<script setup>
import CarouselImage from './CarouselImage.vue'
import { ref } from 'vue'

const props = defineProps({
  title: String,
  image: String,
  alt: String,
  description: String,
  images: Array
})

const showCarousel = ref(false)

const openCarousel = () => {
  showCarousel.value = true
}
const closeCarousel = () => {
  showCarousel.value = false
}
</script>

