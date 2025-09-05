<template>
  <div class="flex space-x-4">
    <a
      v-for="(link, idx) in socialLinks"
      :key="link.label"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="p-1 rounded-full transition-colors duration-300"
      :aria-label="link.label"
      :style="{ backgroundColor: hovered === idx ? link.hoverColor : '#1f2932' }"
      @mouseenter="hovered = idx"
      @mouseleave="hovered = null"
    >
      <span v-html="link.svg" class="w-7 h-7 block text-white"></span>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import socialLinks from '@/public/data/socialLinks.json'

const hovered = ref(null)
</script>

<style scoped>

</style>
