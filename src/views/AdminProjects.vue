<template>
  <div class="admin-projects">
    <h2 class="text-3xl font-bold mb-6">Gestión de Proyectos</h2>
    <div class="space-y-4">
      <div 
        v-for="project in projects" 
        :key="project.id"
        class="glass--effect p-4 rounded-lg"
      >
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-xl font-semibold text-white">{{ project.title }}</h3>
            <p class="text-gray-300 text-sm">{{ project.category }}</p>
          </div>
          <div class="flex items-center space-x-2">
            <span 
              class="px-3 py-1 bg-odoo-purple/30 text-white rounded-full text-sm"
              :class="project.featured ? 'bg-green-500/30' : ''"
            >
              {{ project.featured ? 'Destacado' : 'Regular' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProjectsStore } from '../stores/projects.js'

export default {
  name: 'AdminProjects',
  created() {
    console.log('AdminProjects view creada')
  },
  mounted() {
    console.log('AdminProjects view montada')
  },
  beforeUnmount() {
    console.log('AdminProjects view desmontando')
  },
  computed: {
    projects() {
      // Destructuring del store
      const store = useProjectsStore()
      return store.getAllProjects
    }
  }
}
</script>
