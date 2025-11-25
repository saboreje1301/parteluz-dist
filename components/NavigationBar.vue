<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white/90 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center" aria-label="Ir a inicio - Parteluz Arquitectura">
        <img src="/img/parte-luz-icon.svg" alt="Parteluz Arquitectura" class="h-10 w-auto mr-4">
        <span class="text-2xl font-serif font-semibold text-gray-800">Parteluz Arquitectura</span>
      </NuxtLink>
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8">
        <a 
          v-for="link in links" 
          :key="link.id" 
          :href="link.id" 
          :class="{
            'text-primary font-semibold': isActive(link.id), 
            'text-gray-700': !isActive(link.id)
          }" 
          class="transition"
        >
          {{ link.label }}
        </a>
      </nav>
      <!-- Mobile Toggle -->
      <button @click="menuOpen = true" class="md:hidden text-gray-700 z-50 relative">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill= "rgba(255, 255, 255, 0.5)" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Overlay -->
    <div
      v-show="menuOpen"
      @click="menuOpen = false"
      class="fixed inset-0 bg-gray-800 text-white duration-300 z-40"
    ></div>

    <!-- Drawer Menu -->
    <div
      class="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300"
      :class="{ 'translate-x-0': menuOpen, 'translate-x-full': !menuOpen }"
    >
      <div class="flex justify-between items-center p-4 border-b">
        <h2 class="text-lg font-semibold text-gray-800">Menú</h2>
<button @click="menuOpen = false" class="text-gray-500 hover:text-black" aria-label="Cerrar menú">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="rgba(255, 255, 255, 0.5)" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
      </div>
      <nav class="flex flex-col p-4 space-y-4 ">
        <a
          v-for="link in links"
          :key="link.id"
          :href="link.id"
          @click="menuOpen = false"
          :class="{
            'text-primary font-bold': isActive(link.id),
            'text-gray-600': !isActive(link.id)
          }"
          class="transition"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const route = useRoute()

const links = [
  { id: '/', label: 'Inicio' },
  { id: '/nosotros', label: 'Nosotros' },
  { id: '/portafolio', label: 'Portafolio' },
  { id: '/servicios', label: 'Servicios' },
  { id: '/contacto', label: 'Contacto' }
]

const isActive = (path) => route.path === path
</script>



