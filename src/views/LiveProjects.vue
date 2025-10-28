<template>
  <div class="live-projects-view">
    <Navbar />
    
    <section class="pt-32 pb-20 px-4">
      <div class="container mx-auto max-w-7xl">
        <!-- Header -->
        <div class="text-center mb-16 animate-fade-in">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            <span class="text--gradient">Proyectos en Vivo</span>
          </h1>
          <p class="text-xl text-gray-300">
            Mis proyectos desplegados y funcionando
          </p>
        </div>
        
        <!-- Desktop Grid - 4 Secciones -->
        <div v-if="!isLoading" class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="live in liveProjects" 
            :key="live.id"
            class="computer-window group"
            @click="openProject(live.url)"
          >
            <!-- Computer Screen -->
            <div class="screen-container">
              <!-- Screen Bezel -->
              <div class="screen-bezel">
                <!-- Browser Window -->
                <div class="browser-window">
                  <!-- Browser Bar -->
                  <div class="browser-bar">
                    <div class="browser-buttons">
                      <span class="dot dot-red"></span>
                      <span class="dot dot-yellow"></span>
                      <span class="dot dot-green"></span>
                    </div>
                    <div class="url-bar">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/>
                      </svg>
                      <span class="url-text">{{ live.domain }}</span>
                    </div>
                  </div>
                  
                  <!-- Screen Content -->
                  <div class="screen-content" :class="live.darkMode ? 'dark-mode' : ''" :style="live.bgImage ? { backgroundImage: `url(${live.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}">
                    <div class="preview-content">
                      <!-- Project Icon/Tab -->
                      <div class="tab-bar mb-4">
                        <span :class="['tab', live.darkMode ? 'tab-active-dark' : 'tab-active']">
                          <span class="mr-2">{{ live.icon }}</span>
                          {{ live.title }}
                        </span>
                      </div>
                      
                      <!-- Mock Content -->
                      <div class="content-area" v-if="!live.bgImage">
                        <div class="content-grid">
                          <div class="content-block"></div>
                          <div class="content-block"></div>
                          <div class="content-block"></div>
                        </div>
                      </div>
                      <!-- Overlay for bg images -->
                      <div v-if="live.bgImage" class="bg-overlay"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Base -->
              <div class="screen-base"></div>
              <div class="screen-stand"></div>
            </div>
            
            <!-- Project Info -->
            <div class="mt-6 text-center">
              <h3 class="text-2xl font-bold text-white mb-2">{{ live.title }}</h3>
              <p class="text-gray-300 mb-4">{{ live.technologies.join(' • ') }}</p>
              <button 
                @click.stop="openProject(live.url)"
                class="bg-odoo-purple hover:bg-odoo-dark text-white px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                Abrir Proyecto
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Loading State -->
        <div v-if="isLoading" class="flex justify-center py-20">
          <LoadingSpinner size="lg" message="Cargando proyectos en vivo..." />
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import starkImg from '../assets/img/stark.jpg'
import pikapikaImg from '../assets/img/pikapika.jpg'
import vuestaurantImg from '../assets/img/vuestaurant.jpg'
import monumentalImg from '../assets/img/monumental.jpg'

export default {
  name: 'LiveProjects',
  components: {
    Navbar,
    Footer,
    LoadingSpinner
  },
  data() {
    return {
      isLoading: false,
      liveProjects: [
        {
          id: 'stark-industech',
          title: 'Stark Industech',
          icon: '⚡',
          url: 'https://starkindustech.netlify.app',
          domain: 'starkindustech.netlify.app',
          darkMode: true,
          technologies: ['Tech', 'Industrial', 'Design'],
          bgImage: starkImg
        },
        {
          id: 'pikapikachus',
          title: 'Pika Pika Chus',
          icon: '⚡',
          url: 'https://pikapikachus.netlify.app',
          domain: 'pikapikachus.netlify.app',
          darkMode: false,
          technologies: ['Pokemon', 'API', 'JavaScript'],
          bgImage: pikapikaImg
        },
        {
          id: 'vue-restaurant',
          title: 'Vue Restaurant',
          icon: '🍽️',
          url: 'https://vuestaurant.netlify.app',
          domain: 'vuestaurant.netlify.app',
          darkMode: true,
          technologies: ['Vue.js', 'Restaurant', 'App'],
          bgImage: vuestaurantImg
        },
        {
          id: 'monumental',
          title: 'Monumental Project',
          icon: '🏛️',
          url: 'https://monumental-snickerdoodle-9878e6.netlify.app',
          domain: 'monumental-snickerdoodle...',
          darkMode: true,
          technologies: ['Project', 'Netlify', 'Web'],
          bgImage: monumentalImg
        }
      ]
    }
  },
  created() {
    console.log('LiveProjects view creada')
  },
  mounted() {
    // Simular carga de datos
    this.loadProjects()
  },
  beforeUnmount() {
    console.log('LiveProjects view desmontando')
  },
  methods: {
    /**
     * Carga proyectos en vivo (simulado)
     */
    async loadProjects() {
      this.isLoading = true
      
      // Simular delay de carga
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      this.isLoading = false
      console.log('Proyectos en vivo cargados')
    },
    openProject(url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }
}
</script>

<style scoped>
.computer-window {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.computer-window:hover {
  transform: translateY(-10px);
}

/* Screen Container */
.screen-container {
  perspective: 1000px;
}

.screen-bezel {
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  border: 20px solid #1a1a1a;
  border-radius: 10px;
  padding: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

/* Browser Window */
.browser-window {
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  height: 400px;
}

/* Browser Bar */
.browser-bar {
  background: linear-gradient(180deg, #f0f0f0 0%, #e0e0e0 100%);
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.browser-buttons {
  display: flex;
  gap: 6px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot-red {
  background: #ff5f56;
}

.dot-yellow {
  background: #ffbd2e;
}

.dot-green {
  background: #27c93f;
}

.url-bar {
  flex: 1;
  background: white;
  padding: 6px 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #666;
}

.url-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Screen Content */
.screen-content {
  height: calc(400px - 60px);
  padding: 20px;
  background: #f8f9fa;
}

.dark-mode {
  background: #1a1a1a;
}

/* Tab Bar */
.tab-bar {
  display: flex;
  gap: 4px;
  border-bottom: 2px solid #e0e0e0;
}

.tab {
  padding: 8px 16px;
  background: #e0e0e0;
  border-radius: 4px 4px 0 0;
  font-size: 12px;
  color: #666;
}

.tab-active {
  background: #fff;
  border-bottom: 2px solid #fff;
  color: #333;
  font-weight: 600;
}

.tab-active-dark {
  background: #2a2a2a;
  border-bottom: 2px solid #2a2a2a;
  color: #fff;
}

/* Content Area */
.content-area {
  height: calc(100% - 50px);
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  height: 100%;
}

.content-block {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.4;
  }
}

/* Screen Base */
.screen-base {
  width: 100%;
  height: 20px;
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  border-radius: 10px;
  margin-top: 5px;
}

.screen-stand {
  width: 30%;
  height: 30px;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  margin: 0 auto;
  border-radius: 0 0 10px 10px;
}

/* Background Image Overlay */
.bg-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  pointer-events: none;
}

.screen-content {
  position: relative;
}
</style>

