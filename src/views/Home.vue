<template>
  <div class="home-view">
    <Navbar />
    
    <!-- Hero Section -->
    <section class="hero-section pt-32 pb-20 px-4">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="text-center md:text-left animate-fade-in">
            <h1 class="text-5xl md:text-7xl font-bold mb-6">
              <span class="text-gradient">Hola, soy</span>
              <br>
              <span class="text-white">Isabel Palacios</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mb-8">
              Especialista en Desarrollo Odoo & Frontend
            </p>
            <p class="text-lg text-gray-400 mb-8 max-w-2xl">
              Desarrolladora apasionada por crear soluciones empresariales innovadoras 
              con Odoo y experiencias web modernas. Actualmente trabajo en Konos, 
              especializándome en todas las versiones de Odoo.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <router-link 
                to="/projects" 
                class="button-primary inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-odoo-purple focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Ver todos mis proyectos"
              >
                Ver Proyectos
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </router-link>
              <router-link 
                to="/contact" 
                class="px-6 py-3 border-2 border-odoo-purple text-white rounded-lg 
                       transition-all duration-300 hover:bg-odoo-purple focus:outline-none focus:ring-2 focus:ring-odoo-purple focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Ir a formulario de contacto"
              >
                Contáctame
              </router-link>
            </div>
          </div>
          
          <div class="relative animate-float">
            <div class="absolute inset-0 bg-odoo-purple rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
            <div class="relative glass-effect p-8 rounded-2xl neon-glow">
              <div class="grid grid-cols-3 gap-4">
                <div v-for="(tech, index) in featuredTechnologies" :key="tech.name"
                     class="p-4 bg-odoo-purple/30 rounded-lg text-center 
                            hover:bg-odoo-purple/50 transition-all duration-300"
                     :style="{ animationDelay: `${index * 0.1}s` }"
                >
                  <div class="text-3xl mb-2">{{ tech.icon }}</div>
                  <div class="text-xs text-white font-semibold">{{ tech.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Featured Projects Section -->
    <section class="featured-projects py-20 px-4">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-4">
          <span class="text-gradient">Proyectos Destacados</span>
        </h2>
        <p class="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Explora algunos de mis trabajos más importantes en desarrollo Odoo y Frontend
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            v-for="project in featuredProjects" 
            :key="project.id" 
            :project="project"
          />
        </div>
        
        <div class="text-center mt-12">
          <router-link 
            to="/projects" 
            class="button-primary inline-flex items-center"
          >
            Ver todos los proyectos
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </router-link>
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
  name: 'Home',
  components: {
    Navbar,
    Footer,
    ProjectCard
  },
  data() {
    return {
      featuredTechnologies: [
        { name: 'Odoo', icon: '🔧' },
        { name: 'Vue.js', icon: '⚡' },
        { name: 'Python', icon: '🐍' },
        { name: 'JavaScript', icon: '📜' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'Docker', icon: '🐳' }
      ]
    }
  },
  computed: {
    featuredProjects() {
      const store = useProjectsStore()
      return store.getFeaturedProjects
    }
  }
}
</script>

<style scoped>
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
}
</style>

