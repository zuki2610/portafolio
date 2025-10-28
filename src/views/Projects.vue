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
    isLoading() {
      return this.store.loading
    },
    projects() {
      // Obtener todos los proyectos desde el store
      console.log('Projects data:', this.store.getAllProjects)
      return this.store.getAllProjects
    },
    categories() {
      // Extraer categorías únicas de los proyectos y agregar 'Todos'
      const allCategories = ['Todos', ...new Set(this.projects.map(project => project.category))]
      return allCategories
    },
    filteredProjects() {
      if (this.selectedCategory === 'Todos') {
        return this.projects
      }
      // Filtrar proyectos que coincidan con la categoría seleccionada
      return this.projects.filter(project => project.category === this.selectedCategory)
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
      this.selectedCategory = category
    },
    /**
     * Maneja la selección de un proyecto (evento emitido por ProjectCard)
     * @param {Object} project - Proyecto seleccionado
     */
    handleProjectSelection(project) {
      // Destructuring del proyecto
      const { id, title, category } = project
      
      // Aquí puedes agregar lógica adicional cuando se selecciona un proyecto
      console.log('Proyecto seleccionado:', { id, title, category })
      // Ejemplo: tracking, analytics, etc.
    }
  }
}
</script>

