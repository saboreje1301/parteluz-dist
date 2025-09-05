<script lang="ts" setup>
useHead({
  title: 'Proyectos | Parteluz Arquitectura',
  meta: [
    { name: 'description', content: 'Explora algunos de nuestros proyectos arquitectónicos realizados en San Miguel de Allende y alrededores.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Proyectos | Parteluz Arquitectura' },
    { property: 'og:description', content: 'Galería de proyectos de arquitectura y construcción realizados por Parteluz.' },
    { property: 'og:image', content: '/img/200414.webp' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

<template>
      <NavigationBar></NavigationBar>
  <ProjectGridComponent></ProjectGridComponent>
  <AppFooter></AppFooter>
    <NuxtPage> </NuxtPage>
     <WhatsApp></WhatsApp>
    

</template>