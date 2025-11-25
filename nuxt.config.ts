import tailwindcss from "@tailwindcss/vite";
import Icons from 'unplugin-icons/vite'
import { defineNuxtConfig } from 'nuxt/config'; // Asegúrate de importar esto si no está

export default defineNuxtConfig({
    runtimeConfig: {
    public: {
      siteUrl: 'https://www.parteluzarquitectura.com'
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      
      titleTemplate: '%s | ParteLuz Arquitectura en San Miguel de Allende',
      // 2. Título por defecto (Home)
      title: 'Diseño y Construcción de Casas de Lujo, Remodelaciones y Restauración',

      meta: [
        { name: 'p:domain_verify', content: '9fa6020281f13e0ac58df749fac3703f' },
        { name: 'robots', content: 'index, follow' },
        
        // 3. Meta Descripción Global
        { 
          hid: 'description', // Necesario para evitar duplicados si usas useHead
          name: 'description', 
          content: 'ParteLuz Arquitectura: Estudio líder en San Miguel de Allende, Guanajuato. Especialistas en diseño, construcción de casas de lujo, restauración colonial y remodelaciones de alto nivel.' 
        },
        
        // 4. Open Graph (Para Compartir en Redes Sociales)
        { property: 'og:site_name', content: 'ParteLuz Arquitectura' },
        { property: 'og:type', content: 'website' }, // Tipo de entidad (website para la Home)
        { property: 'og:url', content: 'https://tusitioweb.com/' }, // Reemplazar con tu URL real
        
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preload', as: 'image', href: '/img/aux/20171220_154404.webp' }
      ],
      
      script: [

        {
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-17480765580',
          async: true
        },
        {
          hid: 'gtag-init',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ETW6HE2L72');
            gtag('config', 'AW-17480765580');
          `,
          type: 'text/javascript'
        },

        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ParteLuz Arquitectura",
            "description": "Estudio de Arquitectura y Construcción de Lujo en San Miguel de Allende.",
            "image": "https://tusitioweb.com/img/logo.webp", // Reemplazar con el logo real
            "@id": "https://tusitioweb.com/#organization",
            "url": "https://tusitioweb.com/",
            "telephone": "+524151234567", // Reemplazar con tu teléfono real
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Tu Calle y Número (Opcional)",
              "addressLocality": "San Miguel de Allende",
              "addressRegion": "Guanajuato",
              "addressCountry": "MX"
            },
            "priceRange": "$$$" // Lujo
          })
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'gtag-init': ['innerHTML']
      }
    }
  },
  
  nitro: {
    routeRules: {
            '/**': {
        headers: {
          'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload'
        }
      },
      '/_nuxt/**': 
      { headers: { 
        'Cache-Control': 'public, max-age=31536000, immutable' } 
      }
      ,
      '/img/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } }
    },
    prerender: {
      crawlLinks: true,
      routes: ['/', '/portafolio', '/servicios', '/contacto']
    }
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
      Icons()
    ],
  },
  modules: ['@nuxt/image', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Roboto': true,
      'Playfair Display': [400, 700]
    },
    display: 'swap'
  },

  // Image optimization (ipx) + presets
  image: {
    provider: 'ipx',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1600
    },
    presets: {
      hero: {
        modifiers: {
          width: 1600,
          quality: 80,
          format: 'webp'
        }
      }
    }
  },
},

);