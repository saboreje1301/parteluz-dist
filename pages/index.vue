<script setup lang="ts">
useHead({
  title: 'Arquitecto en San Miguel de Allende',
  meta: [
    {
      name: 'description',
      content: 'Expertos en diseño contemporáneo, restauración colonial y construcción de casas de lujo en San Miguel de Allende.'
    },
    { property: 'og:title', content: 'Arquitecto en San Miguel de Allende | ParteLuz' },
    { property: 'og:description', content: 'Diseño, construcción y remodelación de espacios únicos. Estudio de arquitectura en San Miguel de Allende.' },
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

    <section class="py-12 px-6 bg-gray-700">
  <div class="max-w-4xl mx-auto text-center text-white">
    <h2 class="text-4xl font-light mb-4">
      Guía Gratuita: Construir en San Miguel de Allende 2025
    </h2>
    <p class="text-xl mb-8 opacity-90">
      Descarga nuestra guía completa con costos, permisos y todo lo que necesitas saber
    </p>
    <form class="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
      <input 
        type="email" 
        placeholder="Tu correo electrónico" 
        class="flex-1 px-6 py-4 rounded-lg text-gray-200"
      />
      <button class="bg-gray-900 hover:bg-black text-white font-bold px-8 py-4 rounded-lg transition">
        Descargar Gratis
      </button>
    </form>
    <p class="text-sm mt-4 opacity-75">
      *No spam. Solo información valiosa sobre construcción en SMA.
    </p>
  </div>
</section>

    <AppFooter></AppFooter>
    <WhatsApp></WhatsApp>
    
</template>

<style scoped></style>
