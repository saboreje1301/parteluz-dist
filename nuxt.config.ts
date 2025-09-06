import tailwindcss from "@tailwindcss/vite";
import Icons from 'unplugin-icons/vite'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      }
    }
  },
  ssr: false,
  nitro: {
    prerender: {
      crawlLinks: true, // Esto ayuda a Nuxt a encontrar todas las rutas estáticas
      routes: ['/'] // Rutas a prerenderizar si no se encuentran automáticamente
    }
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxt/image'],
});