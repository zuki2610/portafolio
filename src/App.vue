<template>
  <div id="app" class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
    <!-- Skip to main content (accesibilidad) -->
    <a 
      href="#main-content" 
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-odoo-purple focus:text-white focus:rounded-lg"
      aria-label="Saltar al contenido principal"
    >
      Saltar al contenido
    </a>
    
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import { useProjectsStore } from './stores/projects.js'

export default {
  name: 'App',
  mounted() {
    // Cargar proyectos desde la API al montar la app
    // El store maneja automáticamente errores y usa datos locales como fallback
    const store = useProjectsStore()
    
    // Cargar proyectos desde la API con manejo robusto de errores
    // Si la API falla o retorna datos inválidos, se usan los datos locales
    store.loadProjects().catch(error => {
      console.warn('Error al cargar proyectos en montaje inicial:', error)
      // El store ya maneja el error internamente
    })
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

