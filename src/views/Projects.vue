<template>
  <div class="projects-view">
    <Navbar />
    
    <section id="main-content" class="pt-32 pb-20 px-4">
      <div class="container mx-auto">
        <!-- Header -->
        <div class="text-center mb-16 animate-fade-in">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            <span class="text--gradient">Proyectos</span>
          </h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Explora mis trabajos en desarrollo Odoo, Frontend y Full Stack
          </p>
        </div>
        
        <!-- Filters -->
        <ProjectFilter 
          :categories="categories"
          :selectedCategory="selectedCategory"
          @category-selected="filterByCategory"
        />
        
        <!-- Loading State -->
        <div v-if="isLoading" class="flex justify-center py-20">
          <LoadingSpinner size="lg" message="Cargando proyectos..." />
        </div>
        
        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" v-else-if="filteredProjects.length">
          <ProjectCard 
            v-for="project in filteredProjects" 
            :key="project.id" 
            :project="project"
            @project-selected="handleProjectSelection"
          />
        </div>
        
        <!-- No projects message -->
        <div v-else class="text-center py-20">
          <p class="text-2xl text-gray-300">No se encontraron proyectos en esta categoría</p>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import ProjectCard from '../components/ProjectCard.vue'
import ProjectFilter from '../components/ProjectFilter.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import { useProjectsStore } from '../stores/projects.js'

export default {
  name: 'Projects',
  components: {
    Navbar,
    Footer,
    ProjectCard,
    ProjectFilter,
    LoadingSpinner
  },
  data() {
    return {
      selectedCategory: 'Todos'
    }
  },
  computed: {
    store() {
      return useProjectsStore()
    },
    /**
     * Obtiene el estado de carga del store
     * Usa destructuring de propiedades (ES6)
     */
    isLoading() {
      const { loading } = this.store
      return loading
    },
    /**
     * Obtiene todos los proyectos del store
     * Usa destructuring y template literals (ES6)
     */
    projects() {
      const { getAllProjects } = this.store
      return getAllProjects
    },
    /**
     * Calcula categorías únicas usando Set y spread operator (ES6)
     * @returns {Array} Array de categorías únicas con 'Todos'
     */
    categories() {
      const { projects } = this
      const uniqueCategories = [...new Set(projects.map(({ category }) => category))]
      return ['Todos', ...uniqueCategories]
    },
    /**
     * Filtra proyectos según categoría seleccionada
     * Usa destructuring de parámetros en filter callback (ES6)
     */
    filteredProjects() {
      const { selectedCategory, projects } = this
      
      if (selectedCategory === 'Todos') {
        return projects
      }
      
      return projects.filter(({ category }) => category === selectedCategory)
    }
  },
  created() {
    // Inicializar datos antes de montar
    // Destructuring del store para mejor acceso
    const store = useProjectsStore()
    console.log('Projects view creada. Proyectos disponibles:', store.getAllProjects.length)
  },
  mounted() {
    // Cargar datos o configuraciones después de montar
    console.log('Projects view montada')
  },
  beforeUnmount() {
    // Limpieza antes de desmontar
    console.log('Projects view desmontando')
  },
  methods: {
    /**
     * Filtra proyectos por la categoría seleccionada
     * @param {string} category - Categoría a filtrar ('Todos' o específica)
     */
    filterByCategory(category) {
      // ES6: Assignment directo usando destructuring implícito
      this.selectedCategory = category
    },
    /**
     * Maneja la selección de un proyecto (evento emitido por ProjectCard)
     * Usa destructuring avanzado de parámetros (ES6)
     * @param {Object} project - Proyecto con { id, title, category, ... }
     */
    handleProjectSelection(project) {
      // Destructuring con default values y alias (ES6 avanzado)
      const { 
        id, 
        title, 
        category,
        description = 'Sin descripción disponible',
        technologies = []
      } = project
      
      // Template literals para logging (ES6)
      console.log(`Proyecto seleccionado: ${title} en categoría ${category}`)
      
      // Crear objeto con spread operator (ES6)
      const trackingData = {
        projectId: id,
        title,
        category,
        description,
        technologies,
        timestamp: new Date().toISOString(),
        ...project
      }
      
      console.log('Datos de tracking:', trackingData)
    }
  }
}
</script>

