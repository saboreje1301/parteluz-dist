<script setup lang="ts">
// Layout script: no client-side logic required here for now.
</script>

<template>


      <NavigationBar
    :links="[
      { id: 'index', label: 'Inicio' },           
      { id: 'servicios', label: 'Servicios' },    
      { id: 'proyectos', label: 'Portafolio' },   
      { id: 'about', label: 'Nosotros' },         
      { id: 'contacto', label: 'Contacto' }       
    ]">
            </NavigationBar>

            <!-- Aquí se renderiza el contenido de la página -->
            <slot />

            <AppFooter />
            <WhatsApp />


</template>

<style scoped></style>
