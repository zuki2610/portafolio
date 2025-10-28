<template>
  <div class="projects-view">
    <Navbar />
    
    <section class="pt-32 pb-20 px-4">
      <div class="container mx-auto">
        <!-- Header -->
        <div class="text-center mb-16 animate-fade-in">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            <span class="text-gradient">Proyectos</span>
          </h1>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto">
            Explora mis trabajos en desarrollo Odoo, Frontend y Full Stack
          </p>
        </div>
        
        <!-- Filters -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="filterByCategory(category)"
            :class="[
              'px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-odoo-purple',
              selectedCategory === category 
                ? 'bg-odoo-purple text-white shadow-lg neon-glow' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            ]"
            :aria-label="`Filtrar por categoría ${category}`"
            :aria-pressed="selectedCategory === category"
          >
            {{ category }}
          </button>
        </div>
        
        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" v-if="filteredProjects.length">
          <ProjectCard 
            v-for="project in filteredProjects" 
            :key="project.id" 
            :project="project"
          />
        </div>
        
        <!-- No projects message -->
        <div v-else class="text-center py-20">
          <p class="text-2xl text-gray-400">No se encontraron proyectos en esta categoría</p>
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
import { useProjectsStore } from '../stores/projects.js'

export default {
  name: 'Projects',
  components: {
    Navbar,
    Footer,
    ProjectCard
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
    projects() {
      console.log('Projects data:', this.store.getAllProjects)
      return this.store.getAllProjects
    },
    categories() {
      const cats = ['Todos', ...new Set(this.projects.map(p => p.category))]
      return cats
    },
    filteredProjects() {
      if (this.selectedCategory === 'Todos') {
        return this.projects
      }
      return this.projects.filter(p => p.category === this.selectedCategory)
    }
  },
  methods: {
    filterByCategory(category) {
      this.selectedCategory = category
    }
  }
}
</script>

