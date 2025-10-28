<template>
  <div class="about-view">
    <Navbar />
    
    <section class="pt-32 pb-20 px-4">
      <div class="container mx-auto">
        <div class="max-w-4xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-16 animate-fade-in">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
              <span class="text-gradient">Sobre Mí</span>
            </h1>
            <p class="text-xl text-gray-400">
              Desarrolladora Full Stack con pasión por Odoo y Frontend
            </p>
          </div>
          
          <!-- Main Content -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <!-- Image/Icon Card -->
            <div class="glass-effect p-8 rounded-2xl neon-glow animate-float">
              <div class="text-center">
                <div class="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-odoo-purple to-odoo-dark 
                           flex items-center justify-center text-6xl animate-spin-slow">
                  👩‍💻
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Isabel Palacios</h3>
                <p class="text-odoo-light font-semibold">Desarrolladora Odoo & Frontend</p>
              </div>
            </div>
            
            <!-- About Text -->
            <div class="space-y-6 animate-slide-up">
              <div class="glass-effect p-6 rounded-xl">
                <h3 class="text-2xl font-bold text-white mb-4 flex items-center">
                  <span class="mr-3">🎓</span>
                  Educación
                </h3>
                <ul class="space-y-3 text-gray-300">
                  <li class="flex items-start">
                    <span class="mr-2">📚</span>
                    <div>
                      <strong>Maestria en Desarrollo de Software</strong> - Universidad Bernardo O'Higgins
                      <p class="text-sm text-gray-400">En curso</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-2">💻</span>
                    <div>
                      <strong>Trainee Frontend - Desarrollo de Software Frontend</strong> - Universidad Andrés Bello
                      <p class="text-sm text-gray-400">En curso</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-2">🚀</span>
                    <div>
                      <strong>Desarrollador Fullstack</strong> - Desafío LATAM
                      <p class="text-sm text-gray-400">Completado</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-2">🎓</span>
                    <div>
                      <strong>Diplomado en Ingeniería de Software</strong> - Universidad Andrés Bello (UBO)
                      <p class="text-sm text-gray-400">Completado</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-2">🎓</span>
                    <div>
                      <strong>Master en Educación, Mención Gerencia</strong> - Universidad Bicentenaria de Aragua (UBA)
                      <p class="text-sm text-gray-400">Completado</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-2">⚖️</span>
                    <div>
                      <strong>Abogado</strong> - Universidad Bicentenaria de Aragua (UBA)
                      <p class="text-sm text-gray-400">Completado</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Idiomas -->
          <div class="glass-effect p-8 rounded-2xl neon-glow mb-16">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
              <span class="mr-3">🌐</span>
              Idiomas
            </h3>
            <div class="bg-odoo-purple/20 p-6 rounded-xl">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <span class="text-2xl mr-3">🇺🇸</span>
                    <div>
                      <h4 class="text-xl font-bold text-white">Inglés</h4>
                      <p class="text-gray-300">Avanzado</p>
                    </div>
                  </div>
                  <div class="flex space-x-1">
                    <div class="w-3 h-3 bg-odoo-purple rounded-full"></div>
                    <div class="w-3 h-3 bg-odoo-purple rounded-full"></div>
                    <div class="w-3 h-3 bg-odoo-purple rounded-full"></div>
                    <div class="w-3 h-3 bg-odoo-purple rounded-full"></div>
                    <div class="w-3 h-3 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <span class="text-2xl mr-3">🇪🇸</span>
                    <div>
                      <h4 class="text-xl font-bold text-white">Español</h4>
                      <p class="text-gray-300">Nativo</p>
                    </div>
                  </div>
                  <div class="flex space-x-1">
                    <div class="w-3 h-3 bg-odoo-purple rounded-full"></div>
                    <div class="w-3 h-3 bg-odoo-purple rounded-full"></div>
                    <div class="w-3 h-3 bg-odoo-purple rounded-full"></div>
                    <div class="w-3 h-3 bg-odoo-purple rounded-full"></div>
                    <div class="w-3 h-3 bg-odoo-purple rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Current Work -->
          <div class="glass-effect p-8 rounded-2xl neon-glow mb-16">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
              <span class="mr-3">💼</span>
              Experiencia Actual
            </h3>
            <div class="bg-odoo-purple/20 p-6 rounded-xl">
              <h4 class="text-xl font-bold text-white mb-2">Konos</h4>
              <p class="text-gray-300 mb-4">
                Desarrolladora especializada en implementación y desarrollo de soluciones Odoo 
                para empresas de diversos sectores. Trabajo con todas las versiones de Odoo, 
                desde versiones legacy hasta la versión más reciente.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-odoo-purple rounded-full text-sm text-white">Odoo v15</span>
                <span class="px-3 py-1 bg-odoo-purple rounded-full text-sm text-white">Odoo v16</span>
                <span class="px-3 py-1 bg-odoo-purple rounded-full text-sm text-white">Odoo v17</span>
                <span class="px-3 py-1 bg-odoo-purple rounded-full text-sm text-white">Odoo v18</span>
                <span class="px-3 py-1 bg-odoo-purple rounded-full text-sm text-white">Odoo v19</span>
                <span class="px-3 py-1 bg-odoo-purple rounded-full text-sm text-white">Python</span>
                <span class="px-3 py-1 bg-odoo-purple rounded-full text-sm text-white">PostgreSQL</span>
                <span class="px-3 py-1 bg-odoo-purple rounded-full text-sm text-white">Shell</span>
              </div>
            </div>
          </div>
          
          <!-- Skills -->
          <div class="mb-16">
            <h3 class="text-3xl font-bold text-white mb-8 text-center">
              <span class="text-gradient">Habilidades Técnicas</span>
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="skill in skills" :key="skill.category"
                   class="glass-effect p-6 rounded-xl card-hover">
                <div class="flex items-center mb-4">
                  <span class="text-3xl mr-4">{{ skill.icon }}</span>
                  <h4 class="text-xl font-bold text-white">{{ skill.category }}</h4>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in skill.technologies" :key="tech"
                        class="px-3 py-1 bg-odoo-purple/30 rounded-full text-sm text-white">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- CTA -->
          <div class="text-center">
            <router-link 
              to="/contact" 
              class="button-primary inline-flex items-center text-lg px-8 py-4"
            >
              ¡Trabajemos Juntos!
              <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'About',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      skills: [
        {
          category: 'Backend',
          icon: '⚙️',
          technologies: ['Python', 'Odoo', 'PostgreSQL', 'Docker', 'Shell Script', 'Linux']
        },
        {
          category: 'Frontend',
          icon: '🎨',
          technologies: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite']
        },
        {
          category: 'Herramientas',
          icon: '🔧',
          technologies: ['Git', 'GitHub', 'VS Code', 'Postman', 'Odoo Studio', 'Figma']
        },
        {
          category: 'Metodologías',
          icon: '📋',
          technologies: ['Agile', 'Scrum', 'Kanban', 'CI/CD', 'DevOps']
        }
      ]
    }
  }
}
</script>

