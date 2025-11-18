<script setup>
// Reutilizamos la página `contact.vue` para servir la ruta /contacto
// Esto evita errores de prerender cuando el sitio enlaza a /contacto.
import ContactPage from './contact.vue'
</script>

<template>
  <ContactPage />
</template>
