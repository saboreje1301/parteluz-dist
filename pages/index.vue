<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Debug log para confirmar que la página index se monta correctamente
  console.log('[debug] index.vue mounted')
})
useHead({
  title: 'Arquitecto en San Miguel de Allende | Diseño, Construcción y Lujo | ParteLuz',
  
  meta: [
    {
      name: 'description',
      content: 'Expertos en diseño contemporáneo, restauración colonial y construcción de casas de lujo en San Miguel de Allende. ¡Comienza tu proyecto de arquitectura único hoy mismo!'
    },
    
    // 2. Open Graph Title (Para Redes Sociales/Compartir)
    { property: 'og:title', content: 'Arquitecto en San Miguel de Allende | Diseño, Construcción y Lujo | ParteLuz' },
    
    // 3. Open Graph Description (Para Redes Sociales)
    { property: 'og:description', content: 'Expertos en diseño contemporáneo, restauración colonial y construcción de casas de lujo en San Miguel de Allende. ¡Comienza tu proyecto de arquitectura único hoy mismo!' },
    
    // 4. Open Graph Image: Se usa URL Absoluta
    { property: 'og:image', content: 'https://www.parteluzarquitectura.com/img/og-image.webp' }, 
    
    { property: 'og:url', content: 'https://www.parteluzarquitectura.com' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' } 
  ],
  
  link: [
    { rel: 'canonical', href: 'https://www.parteluzarquitectura.com' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  
  script: [
    ( {
      type: 'application/ld+json',
      // Convertimos el objeto JSON a una cadena de texto para que useHead lo inyecte
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        // **Recomendación:** Usar LocalBusiness en lugar de ArchitecturalDesign para mejor SEO local.
        "@type": "LocalBusiness", 
        "name": "ParteLuz Arquitectura",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Miguel de Allende",
          "addressRegion": "Guanajuato",
          "addressCountry": "MX"
        }
      })
    } as any)
  ]
})
</script>

<template>

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

    
</template>

<style scoped></style>
