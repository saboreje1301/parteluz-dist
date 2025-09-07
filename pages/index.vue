<script setup lang="ts">
useHead({
  title: 'Arquitectos en San Miguel de Allende | ParteLuz Arquitectura',
  meta: [
    {
      name: 'description',
      content: 'ParteLuz Arquitectura: despacho de arquitectos en San Miguel de Allende. Expertos en diseño contemporáneo, restauración colonial y construcción de casas de lujo.'
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Arquitectos en San Miguel de Allende | ParteLuz' },
    { property: 'og:description', content: 'Estudio de arquitectura en San Miguel de Allende. Diseño, construcción y remodelación de espacios únicos.' },
    { property: 'og:image', content: '/img/og-image.webp' },
    { property: 'og:url', content: 'https://www.parteluzarquitectura.com' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.parteluzarquitectura.com' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>






<template>




  <NavigationBar
    :links="[
      { id: 'index', label: 'Index' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' }
    ]">
    </NavigationBar>
    <HeroSection> </HeroSection>
    <AboutSection></AboutSection>
    <BenefitsSection> </BenefitsSection>
    <DestacadosGrid></DestacadosGrid>
    <TestimonialsSection> </TestimonialsSection>
    <ProcessSection></ProcessSection>
    <BlogSection></BlogSection>
    <FinalCTASection></FinalCTASection>
    <AppFooter></AppFooter>
    <WhatsApp></WhatsApp>
    
</template>

<style scoped></style>
