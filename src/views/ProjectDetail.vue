<template>
  <div class="project-detail-view">
    <Navbar />
    
    <section id="main-content" class="pt-32 pb-20 px-4" v-if="project">
      <div class="container mx-auto max-w-6xl">
        <!-- Breadcrumbs -->
        <Breadcrumbs :items="breadcrumbItems" class="mb-8" />
        
        <!-- Back Button -->
        <router-link 
          to="/projects" 
          class="inline-flex items-center text-odoo-light hover:text-white mb-8 transition-colors focus:outline-none focus:ring-2 focus:ring-odoo-purple focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
          aria-label="Volver a la lista de proyectos"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Volver a Proyectos
        </router-link>
        
        <!-- Project Header -->
        <div class="glass-effect p-8 rounded-2xl neon-glow mb-12 animate-fade-in">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 rounded-lg bg-odoo-purple flex items-center justify-center mr-6">
              <span class="text-4xl">{{ project.icon }}</span>
            </div>
            <div>
              <h1 class="text-4xl font-bold text-white mb-2">{{ project.title }}</h1>
              <p class="text-xl text-gray-300">{{ project.category }}</p>
            </div>
          </div>
          
          <p class="text-lg text-gray-300 mb-6">{{ project.description }}</p>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span 
              v-for="tech in project.technologies" 
              :key="tech"
              class="px-4 py-2 bg-odoo-purple/30 rounded-full text-sm text-white font-semibold"
            >
              {{ tech }}
            </span>
          </div>
          
          <div class="flex items-center text-gray-300">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>Fecha: {{ project.date }}</span>
          </div>
        </div>
        
        <!-- Project Details -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" v-if="project.details">
          <!-- Challenges -->
          <div class="glass-effect p-8 rounded-2xl neon-glow animate-slide-up">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
              <span class="mr-3">🎯</span>
              Desafíos
            </h3>
            <ul class="space-y-4">
              <li 
                v-for="(challenge, index) in project.details.challenges" 
                :key="index"
                class="flex items-start"
              >
                <span class="text-odoo-light mr-3 mt-1">✓</span>
                <span class="text-gray-300">{{ challenge }}</span>
              </li>
            </ul>
          </div>
          
          <!-- Solution -->
          <div class="glass-effect p-8 rounded-2xl neon-glow animate-slide-up">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
              <span class="mr-3">💡</span>
              Solución Implementada
            </h3>
            <p class="text-gray-300 leading-relaxed">
              {{ project.details.solution }}
            </p>
          </div>
          
          <!-- Results -->
          <div class="glass-effect p-8 rounded-2xl neon-glow animate-slide-up" v-if="project.details.results">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
              <span class="mr-3">📈</span>
              Resultados
            </h3>
            <ul class="space-y-4">
              <li 
                v-for="(result, index) in project.details.results" 
                :key="index"
                class="flex items-start"
              >
                <span class="text-green-400 mr-3 mt-1">✈</span>
                <span class="text-gray-300">{{ result }}</span>
              </li>
            </ul>
          </div>
          
          <!-- Project Info -->
          <div class="glass-effect p-8 rounded-2xl neon-glow animate-slide-up">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
              <span class="mr-3">ℹ️</span>
              Información del Proyecto
            </h3>
            <div class="space-y-4">
              <div v-if="project.details.client">
                <p class="text-sm text-gray-300 mb-1">Cliente</p>
                <p class="text-white font-semibold">{{ project.details.client }}</p>
              </div>
              <div v-if="project.details.duration">
                <p class="text-sm text-gray-300 mb-1">Duración</p>
                <p class="text-white font-semibold">{{ project.details.duration }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-300 mb-1">Tecnologías Utilizadas</p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span 
                    v-for="tech in project.details.technologies" 
                    :key="tech"
                    class="px-3 py-1 bg-odoo-purple/30 rounded-full text-xs text-white"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
          <a 
            v-if="project.link"
            :href="project.link" 
            target="_blank"
            rel="noopener"
            class="button--primary inline-flex items-center justify-center"
          >
            Ver Código
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
          <router-link 
            to="/contact" 
            class="px-6 py-3 border-2 border-odoo-purple text-white rounded-lg 
                   transition-all duration-300 hover:bg-odoo-purple text-center"
          >
            Contáctame sobre este proyecto
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- Loading State -->
    <div v-else class="pt-32 pb-20">
      <LoadingSpinner size="lg" message="Cargando proyecto..." />
    </div>
    
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import { useProjectsStore } from '../stores/projects.js'

export default {
  name: 'ProjectDetail',
  components: {
    Navbar,
    Footer,
    Breadcrumbs
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  created() {
    // Inicializar datos antes de montar
    console.log('ProjectDetail creada para proyecto:', this.id)
  },
  computed: {
    /**
     * ESTADO INTERNO: Store de proyectos
     * @returns {Object} Store de Pinia con proyectos
     */
    store() {
      return useProjectsStore()
    },
    /**
     * ESTADO INTERNO: Proyecto actual basado en el ID de la ruta
     * @returns {Object|undefined} Proyecto encontrado o undefined
     */
    project() {
      // Destructuring para obtener el ID
      const { id } = this
      return this.store.getProjectById(id)
    },
    /**
     * Genera los breadcrumbs dinámicamente basado en el proyecto actual
     * ESTADO INTERNO: Computed property para navegación
     * @returns {Array} Array de objetos breadcrumb con path y label
     */
    breadcrumbItems() {
      const { project } = this
      return [
        { path: '/', label: 'Inicio' },
        { path: '/projects', label: 'Proyectos' },
        { path: `/project/${this.id}`, label: project?.title || 'Detalle' }
      ]
    },
    /**
     * ESTADO INTERNO: Verifica si el proyecto tiene detalles adicionales
     * @returns {boolean} True si tiene detalles
     */
    hasProjectDetails() {
      const { project } = this
      return project?.details && Object.keys(project.details).length > 0
    },
    /**
     * ESTADO INTERNO: Lista de tecnologías del proyecto como array
     * @returns {Array<string>} Lista de tecnologías
     */
    projectTechnologies() {
      const { project } = this
      return project?.technologies || []
    }
  },
  mounted() {
    // Destructuring para verificar si el proyecto existe
    const { project } = this
    
    // Verificar que el proyecto existe después de montar
    if (!project) {
      console.warn(`Proyecto con ID ${this.id} no encontrado`)
      this.$router.push('/projects')
    }
    console.log('ProjectDetail montada')
  },
  beforeUnmount() {
    // Limpieza antes de desmontar
    console.log('ProjectDetail desmontando')
  }
}
</script>

