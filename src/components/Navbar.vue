<template>
  <nav class="fixed top-0 w-full z-50 glass--effect" role="navigation" aria-label="Navegación principal">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-2xl font-bold text--gradient" aria-label="Ir a inicio">
          Isabel Palacios
        </router-link>
        
        <button 
          @click="toggleMenu" 
          class="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        
        <ul class="hidden md:flex space-x-6">
          <li v-for="item in menuItems" :key="item.name">
            <router-link 
              :to="item.path" 
              class="navbar__link"
              active-class="navbar__link--active text-odoo-light"
              :aria-label="`Navegar a ${item.name}`"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden mt-4">
        <ul class="space-y-4">
          <li v-for="item in menuItems" :key="item.name">
            <router-link 
              :to="item.path" 
              @click="closeMenu"
              class="navbar__link navbar__link--mobile block py-2 text-white hover:text-odoo-light"
              :aria-label="`Navegar a ${item.name}`"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
      menuItems: [
        { name: 'Inicio', path: '/' },
        { name: 'Sobre Mí', path: '/about' },
        { name: 'Proyectos', path: '/projects' },
        { name: 'En Vivo', path: '/live' },
        { name: 'Contacto', path: '/contact' }
      ]
    }
  },
  created() {
    // Inicializar estado antes de montar el componente
    console.log('Navbar creado')
  },
  mounted() {
    // Configuraciones después de montar el componente
    // Cerrar menú móvil si está abierto
    if (this.isMenuOpen) {
      this.closeMenu()
    }
  },
  beforeUnmount() {
    // Limpieza antes de desmontar el componente
    this.isMenuOpen = false
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  },
  watch: {
    $route() {
      this.closeMenu()
    }
  }
}
</script>

<style scoped>
/* Block: navbar */
/* Element: navbar__link */
.navbar__link {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

/* Modifier: navbar__link--hover (on hover state) */
.navbar__link:hover {
  color: #A6839F;
}

/* Modifier: navbar__link--active (active route) */
.navbar__link.navbar__link--active {
  color: #A6839F;
  font-weight: 600;
}
</style>

