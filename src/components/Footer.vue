<template>
  <footer class="bg-gray-900 border-t border-gray-800 mt-20">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold text-gradient mb-4">Isabel Palacios</h3>
          <p class="text-gray-400">Desarrolladora especializada en Odoo y Frontend con pasión por crear soluciones innovadoras.</p>
        </div>
        
      <div>
        <h4 class="text-lg font-semibold text-white mb-4">Enlaces</h4>
        <ul class="space-y-2" role="list">
          <li v-for="link in links" :key="link.name">
            <a 
              :href="link.url" 
              :target="link.url.startsWith('http') ? '_blank' : undefined" 
              :rel="link.url.startsWith('http') ? 'noopener' : undefined"
              class="text-gray-400 hover:text-odoo-light transition-colors focus:outline-none focus:ring-2 focus:ring-odoo-purple rounded"
              :aria-label="`${link.name}${link.url.startsWith('http') ? ' (se abre en nueva ventana)' : ''}`"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
        
      <div>
        <h4 class="text-lg font-semibold text-white mb-4">Redes Sociales</h4>
        <nav class="flex space-x-4" role="navigation" aria-label="Enlaces a redes sociales">
          <a 
            v-for="social in socials" 
            :key="social.name"
            :href="social.url" 
            :target="social.isExternal ? '_blank' : undefined"
            :rel="social.isExternal ? 'noopener' : undefined"
            class="text-gray-400 hover:text-odoo-light transition-colors focus:outline-none focus:ring-2 focus:ring-odoo-purple rounded"
            :aria-label="`${social.name}${social.isExternal ? ' (se abre en nueva ventana)' : ''}`"
          >
            <span class="text-2xl">{{ social.icon }}</span>
          </a>
        </nav>
      </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {{ currentYear }} Isabel Palacios. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      links: [
        { name: 'GitHub', url: 'https://github.com/zuki2610' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/isabelpalacioshernandez/' },
        { name: 'Contacto', url: '/contact' }
      ],
      socials: [
        { name: 'GitHub', url: 'https://github.com/zuki2610', icon: '🐙', isExternal: true },
        { name: 'Twitter', url: 'https://twitter.com/poshisa', icon: '🐦', isExternal: true },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/isabelpalacioshernandez/', icon: '💼', isExternal: true },
        { name: 'Contacto', url: '/contact', icon: '📧', isExternal: false }
      ],
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

