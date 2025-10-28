<template>
  <div class="contact-view">
    <Navbar />
    
    <section id="main-content" class="pt-32 pb-20 px-4">
      <div class="container mx-auto max-w-4xl">
        <!-- Header -->
        <div class="text-center mb-16 animate-fade-in">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            <span class="text--gradient">Contacto</span>
          </h1>
          <p class="text-xl text-gray-300">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-6">
            <div class="glass--effect p-6 rounded-xl neon--glow card--hover">
              <h3 class="text-2xl font-bold text-white mb-4">Información de Contacto</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <span class="text-2xl mr-4">📧</span>
                  <div>
                    <p class="text-gray-300 text-sm">Email</p>
                    <a href="mailto:issabelpalacios@gmail.com" class="text-odoo-light hover:text-white transition-colors">
                      issabelpalacios@gmail.com
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <span class="text-2xl mr-4">🐙</span>
                  <div>
                    <p class="text-gray-300 text-sm">GitHub</p>
                    <a href="https://github.com/zuki2610" target="_blank" rel="noopener" class="text-odoo-light hover:text-white transition-colors">
                      github.com/zuki2610
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <span class="text-2xl mr-4">🐦</span>
                  <div>
                    <p class="text-gray-300 text-sm">Twitter</p>
                    <a href="https://twitter.com/poshisa" target="_blank" rel="noopener" class="text-odoo-light hover:text-white transition-colors">
                      @poshisa
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <span class="text-2xl mr-4">💼</span>
                  <div>
                    <p class="text-gray-300 text-sm">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/isabelpalacioshernandez/" target="_blank" rel="noopener" class="text-odoo-light hover:text-white transition-colors">
                      Isabel Palacios Hernández
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <span class="text-2xl mr-4">🌎</span>
                  <div>
                    <p class="text-gray-300 text-sm">Ubicación</p>
                    <p class="text-white">Chile</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="glass-effect p-6 rounded-xl neon-glow">
              <h3 class="text-2xl font-bold text-white mb-4">Disponibilidad</h3>
              <p class="text-gray-300 mb-4">
                Actualmente disponible para proyectos freelance y colaboraciones en desarrollo Odoo y Frontend.
              </p>
              <div class="flex items-center text-green-400">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="10" fill="currentColor"/>
                </svg>
                <span>Disponible para nuevos proyectos</span>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <ContactForm @submitted="handleFormSubmitted" @error="handleFormError" />
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import ContactForm from '../components/ContactForm.vue'

export default {
  name: 'Contact',
  components: {
    Navbar,
    Footer,
    ContactForm
  },
  created() {
    console.log('Contact view creada')
  },
  mounted() {
    console.log('Contact view montada')
  },
  beforeUnmount() {
    console.log('Contact view desmontando')
  },
  methods: {
    /**
     * Maneja el evento cuando el formulario se envía exitosamente
     * @param {Object} formData - Datos del formulario enviado
     */
    handleFormSubmitted(formData) {
      console.log('Formulario enviado exitosamente:', formData)
    },
    /**
     * Maneja el evento cuando hay un error al enviar el formulario
     * @param {Error} error - Error ocurrido
     */
    handleFormError(error) {
      console.error('Error al enviar el formulario:', error)
    }
  }
}
</script>

