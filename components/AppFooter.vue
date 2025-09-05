// src/components/AppFooter.vue
<template>
  <footer class="bg-gray-900 text-gray-300 py-12 mt-20">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 class="text-white text-xl font-bold mb-4">Parteluz Arquitectura</h3>
        <p class="text-sm">Diseñamos espacios que inspiran. Conectamos forma, función y emoción para transformar tu vida diaria.</p>
      </div>

      <div>
        <h4 class="text-white font-semibold mb-3">Servicios</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">Diseño Arquitectónico</a></li>
          <li><a href="#" class="hover:underline">Construcción</a></li>
          <li><a href="#" class="hover:underline">Interiorismo</a></li>
          <li><a href="#" class="hover:underline">Consultoría</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-semibold mb-3">Contacto</h4>
        <ul class="space-y-2 text-sm">
          <li><span class="block">Email: <a href="mailto:contacto@parteluz.com" class="hover:underline">contacto@parteluz.com</a></span></li>
          <li><span class="block">Tel: <a href="tel:+525512345678" class="hover:underline">+52 415 145 1007</a></span></li>
          <li><span class="block">San Miguel de Allende, Gto</span></li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-semibold mb-3">Redes sociales</h4>
        <div className="flex space-x-4">
          <SocialLinks></SocialLinks>
        </div>
      </div>
    </div>

    <div class="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
      © 2025 Parteluz Arquitectura. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");
</style>