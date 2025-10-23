import tailwindcss from "@tailwindcss/vite";
import Icons from 'unplugin-icons/vite'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
    
    meta: [
        // ⭐ AÑADIDO: Etiqueta de verificación de Pinterest
        { name: 'p:domain_verify', content: '9fa6020281f13e0ac58df749fac3703f' },
        { name: 'robots', content: 'index, follow' },
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
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'gtag-init': ['innerHTML']
      }
    }
  },
  ssr: false,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
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
  modules: ['@nuxt/image'],
});