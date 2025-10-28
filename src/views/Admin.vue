<template>
  <div class="admin-view">
    <Navbar />
    
    <section id="main-content" class="pt-32 pb-20 px-4">
      <div class="container mx-auto max-w-6xl">
        <h1 class="text-4xl font-bold mb-8">
          <span class="text--gradient">Panel de Administración</span>
        </h1>
        
        <!-- Admin Navigation -->
        <div class="glass--effect p-6 rounded-xl mb-8">
          <nav role="navigation" aria-label="Navegación de administración">
            <ul class="flex space-x-4">
              <li v-for="tab in tabs" :key="tab.path">
                <router-link
                  :to="tab.path"
                  class="px-4 py-2 rounded-lg transition-colors"
                  :class="isActiveTab(tab.path) ? 'bg-odoo-purple text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'"
                  :aria-current="isActiveTab(tab.path) ? 'page' : undefined"
                >
                  {{ tab.label }}
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
        
        <!-- Nested Router View -->
        <div class="glass--effect p-8 rounded-xl">
          <router-view />
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
  name: 'Admin',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      tabs: [
        { path: '/admin/users', label: 'Usuarios' },
        { path: '/admin/projects', label: 'Proyectos' }
      ]
    }
  },
  created() {
    console.log('Admin view creada')
  },
  mounted() {
    console.log('Admin view montada')
  },
  beforeUnmount() {
    console.log('Admin view desmontando')
  },
  methods: {
    /**
     * Verifica si una ruta de tab está activa
     * @param {string} path - Ruta a verificar
     * @returns {boolean} True si la ruta está activa
     */
    isActiveTab(path) {
      return this.$route.path === path
    }
  }
}
</script>
