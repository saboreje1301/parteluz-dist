<script setup lang="ts">

useHead({
  title: 'Contacto: Arquitectos y Constructores en San Miguel de Allende',
  meta: [
    { 
      name: 'description', 
      content: 'Contáctanos: Llámanos, escríbenos o visita nuestras oficinas en San Miguel de Allende para iniciar tu proyecto de alta calidad o restauración.' 
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Contacto: Arquitectos y Constructores en San Miguel de Allende' },
    { property: 'og:description', content: 'Solicita información o agenda una cita con nuestro equipo de ParteLuz Arquitectura.' },
    { property: 'og:image', content: '/img/200414.webp' },
    { property: 'og:type', content: 'website' }
  ],

  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "description": "Información de contacto para Parteluz Arquitectura en SMA.",
        "url": "https://tusitioweb.com/contacto", // Reemplazar con tu URL real
        "potentialAction": {
          "@type": "ContactPoint",
          "telephone": "+52-415-123-4567", // Reemplazar con tu teléfono
          "contactType": "ventas",
          "areaServed": "San Miguel de Allende, Guanajuato",
          "availableLanguage": ["es", "en"]
        }
      })
    }
  ]
})
</script>

<template>
  <div>

    <header class="pt-24 pb-8 px-4 text-center max-w-4xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-serif font-extrabold mb-4 text-gray-900">
        Comienza tu Proyecto de Construcción o Remodelación
      </h1>
      <p class="text-xl text-gray-700">
        Estamos listos para escuchar tus ideas. Contáctanos en San Miguel de Allende.
      </p>
    </header>
    
    <ContactSection></ContactSection> 
    
  </div>
</template>

<style scoped></style>
