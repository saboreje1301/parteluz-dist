<script setup lang="ts">
useHead({
  title: 'Contacto | Parteluz Arquitectura',
  meta: [
    { name: 'description', content: 'Contáctanos para iniciar tu proyecto arquitectónico en San Miguel de Allende.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Contacto | Parteluz Arquitectura' },
    { property: 'og:description', content: 'Solicita información o agenda una cita con nuestro equipo.' },
    { property: 'og:image', content: '/img/200414.webp' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

<template>
<NavigationBar></NavigationBar>
<ContactSection></ContactSection>
<WhatsApp></WhatsApp>
<AppFooter></AppFooter>

</template>

<style scoped></style>
