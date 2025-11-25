<script setup>
import AvisoPrivacidad from '~/components/AvisoPrivacidad.vue'

useHead({
  title: 'Política de Privacidad',
  meta: [
    { name: 'robots', content: 'index, follow' },
    { name: 'description', content: 'Aviso de privacidad de ParteLuz Arquitectura. Conoce cómo tratamos y protegemos tus datos.' }
  ]
})
</script>

<template>
  <div class="max-w-5xl mx-auto py-12 px-4">
    <AvisoPrivacidad />
  </div>
</template>

<style scoped></style>
