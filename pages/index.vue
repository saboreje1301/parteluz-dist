<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Debug log para confirmar que la página index se monta correctamente
  console.log('[debug] index.vue mounted')
})
useHead({
  title: 'Arquitectos San Miguel de Allende |  Arquitectura, Diseño y Construcción',
  
  meta: [
    {
      name: 'description',
      content: 'Estudio de arquitectura, construcción y diseño en San Miguel de Allende. Diseñamos y construimos casas de lujo, restauración colonial y proyectos contemporáneos. +15 años de experiencia en SMA.'
    },
    
    // 2. Open Graph Title (Para Redes Sociales/Compartir)
    { property: 'og:title', content: 'Arquitectos San Miguel de Allende | ParteLuz Diseño y Construcción' },
    
    // 3. Open Graph Description (Para Redes Sociales)
    { property: 'og:description', content: 'Estudio de arquitectura en San Miguel de Allende. Diseñamos y construimos casas de lujo, restauración colonial y proyectos contemporáneos. +15 años de experiencia en SMA.' },
    
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
        "@type": "Architect", 
        "name": "ParteLuz Arquitectura",
        "image": "https://www.parteluzarquitectura.com/img/og-image.webp",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Miguel de Allende",
          "addressRegion": "Guanajuato",
          "addressCountry": "MX"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "20.914992",
          "longitude": "-100.743030"
        },
        "url": "https://www.parteluzarquitectura.com",
        "telephone": "+524151451007",
        "areaServed": "San Miguel de Allende, Queretaro, Guanajuato",
        "priceRange": "$$$",
        "sameAs": [
          "https://www.facebook.com/parteluzarquitectura",
          "https://www.instagram.com/parteluzarquitectura",
          "https://www.pinterest.com/parteluzarquitectura",
          "https://www.linkedin.com/company/parteluz-arquitectura"
        ],
        "foundingDate": "2011",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "47"
        },
        "description": "Estudio de arquitectura en San Miguel de Allende. Diseñamos y construimos casas de lujo, restauración colonial y proyectos contemporáneos. +15 años de experiencia en SMA.",
        "keywords": "arquitectos en san miguel de allende, estudio de arquitectura san miguel de allende, diseño arquitectonico sma, construccion de casas de lujo sma, restauracion colonial san miguel de allende, arquitectos residenciales sma, proyectos arquitectonicos san miguel de allende",
        "email": "info@parteluzarquitectura.com",
        "founders": [
          {
            "@type": "Person",
            "name": "Rene Salgado"
          }
        ],
        "brand": {
          "@type": "Brand",
          "name": "ParteLuz Arquitectura",
          "logo": "https://www.parteluzarquitectura.com/img/og-image.webp"
        },
        "serviceArea": {
          "@type": "Place",
          "geo": {
            "@type": "GeoShape",
            "box": "20.7840 -101.0000 21.0500 -100.6000"
          }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Arquitectura",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Diseño Arquitectónico Residencial"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Restauración y Remodelación Colonial"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Construcción de Casas de Lujo"
              }
            }
          ]
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.parteluzarquitectura.com/search?query={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.parteluzarquitectura.com"
        },
        "logo": "https://www.parteluzarquitectura.com/img/og-image.webp"        
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
