<template>
  <div id="app" class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
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
    // Si no hay API configurada, usará los datos locales como fallback
    const store = useProjectsStore()
    
    // DESACTIVADO: La API de MockAPI tiene datos incorrectos (solo name, avatar)
    // Usaremos los datos locales que están bien estructurados
    // Una vez que tengas una API con los campos correctos (title, description, etc), descomenta:
    // store.loadProjects()
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

