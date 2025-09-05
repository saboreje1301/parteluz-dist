<template>
  <div class="relative w-full flex items-center justify-center">



    <button
    @click="$emit('close')"
    class="absolute top-5 right-5 z-50 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
    >
    ✕
  </button>

    <!-- Flecha izquierda -->
    <button
      @click="prev"
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 z-40"
    >
      &#8592;
    </button>

    <!-- Imagen principal -->
    <div class="w-full flex justify-center items-center">
      <img
        :src="images[current]"
        :alt="`${alt} ${current + 1}`"
        class="max-h-[80vh] w-auto object-contain mx-auto rounded-lg shadow-lg"
      />
    </div>

    <!-- Flecha derecha -->
    <button
      @click="next"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 z-40"
    >
      &#8594;
    </button>

    <!-- Indicadores -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-40">
      <span
        v-for="(_, idx) in images"
        :key="idx"
        class="w-3 h-3 rounded-full cursor-pointer"
        :class="idx === current ? 'bg-white' : 'bg-gray-400'"
        @click="goTo(idx)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  },
  alt: {
    type: String,
    default: ''
  }
})

const current = ref(0)

const prev = () => {
  current.value = current.value === 0 ? props.images.length - 1 : current.value - 1
}
const next = () => {
  current.value = current.value === props.images.length - 1 ? 0 : current.value + 1
}
const goTo = (idx) => {
  current.value = idx
}
</script>

