<script setup lang="ts">
useHead({
  title: 'Sobre Nosotros | Parteluz Arquitectura',
  meta: [
    { name: 'description', content: 'Conoce al equipo de Parteluz Arquitectura y nuestra filosofía de diseño en San Miguel de Allende.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Sobre Nosotros | Parteluz Arquitectura' },
    { property: 'og:description', content: 'Descubre quiénes somos y cómo creamos espacios únicos en San Miguel de Allende.' },
    { property: 'og:image', content: '/img/IMG-20210430.webp' },
    { property: 'og:type', content: 'website' }
  ]
})

</script>

<template>
  <NavigationBar></NavigationBar>
  <IntroSection></IntroSection>
  <WhatsApp></WhatsApp>
  <AppFooter></AppFooter>

</template>

<style scoped></style>
