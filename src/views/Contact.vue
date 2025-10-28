<template>
  <div class="contact-view">
    <Navbar />
    
    <section class="pt-32 pb-20 px-4">
      <div class="container mx-auto max-w-4xl">
        <!-- Header -->
        <div class="text-center mb-16 animate-fade-in">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            <span class="text-gradient">Contacto</span>
          </h1>
          <p class="text-xl text-gray-400">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-6">
            <div class="glass-effect p-6 rounded-xl neon-glow card-hover">
              <h3 class="text-2xl font-bold text-white mb-4">Información de Contacto</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <span class="text-2xl mr-4">📧</span>
                  <div>
                    <p class="text-gray-400 text-sm">Email</p>
                    <a href="mailto:issabelpalacios@gmail.com" class="text-odoo-light hover:text-white transition-colors">
                      issabelpalacios@gmail.com
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <span class="text-2xl mr-4">🐙</span>
                  <div>
                    <p class="text-gray-400 text-sm">GitHub</p>
                    <a href="https://github.com/zuki2610" target="_blank" rel="noopener" class="text-odoo-light hover:text-white transition-colors">
                      github.com/zuki2610
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <span class="text-2xl mr-4">🐦</span>
                  <div>
                    <p class="text-gray-400 text-sm">Twitter</p>
                    <a href="https://twitter.com/poshisa" target="_blank" rel="noopener" class="text-odoo-light hover:text-white transition-colors">
                      @poshisa
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <span class="text-2xl mr-4">💼</span>
                  <div>
                    <p class="text-gray-400 text-sm">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/isabelpalacioshernandez/" target="_blank" rel="noopener" class="text-odoo-light hover:text-white transition-colors">
                      Isabel Palacios Hernández
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <span class="text-2xl mr-4">🌎</span>
                  <div>
                    <p class="text-gray-400 text-sm">Ubicación</p>
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
          <div class="glass-effect p-8 rounded-xl neon-glow">
            <h3 class="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                  Nombre
                </label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                         text-white focus:outline-none focus:border-odoo-purple transition-colors"
                  placeholder="Tu nombre"
                  aria-label="Nombre"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                         text-white focus:outline-none focus:border-odoo-purple transition-colors"
                  placeholder="tu@email.com"
                  aria-label="Email"
                />
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
                  Asunto
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                         text-white focus:outline-none focus:border-odoo-purple transition-colors"
                  placeholder="Sobre qué quieres hablar"
                  aria-label="Asunto"
                />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                         text-white focus:outline-none focus:border-odoo-purple transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  aria-label="Mensaje"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full button-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-odoo-purple focus:ring-offset-2 focus:ring-offset-gray-800"
                :aria-label="isSubmitting ? 'Enviando mensaje, por favor espere' : 'Enviar mensaje de contacto'"
                :aria-busy="isSubmitting"
              >
                <span v-if="!isSubmitting">Enviar Mensaje</span>
                <span v-else class="flex items-center justify-center">
                  <svg class="animate-spin h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              </button>
            </form>
            
            <div 
              v-if="submitMessage" 
              class="mt-4 p-4 rounded-lg" 
              :class="submitSuccess ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'"
              role="alert"
              :aria-live="submitSuccess ? 'polite' : 'assertive'"
            >
              {{ submitMessage }}
            </div>
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
import emailjs from '@emailjs/browser'

export default {
  name: 'Contact',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      submitMessage: '',
      submitSuccess: false
    }
  },
  mounted() {
    // Inicializar EmailJS con tu Public Key
    emailjs.init("4n4L5mm9sn0i8G23K")
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true
      this.submitMessage = ''
      
      try {
        // Enviar email usando EmailJS
        const response = await emailjs.send(
          'service_eu774hm',     // Service ID
          'template_vjkxf8g',    // Template ID
          {
            from_name: this.form.name,
            from_email: this.form.email,
            subject: this.form.subject,
            message: this.form.message,
            to_email: 'issabelpalacios@gmail.com'
          }
        )
        
        console.log('Email sent!', response.status, response.text)
        
        this.submitSuccess = true
        this.submitMessage = '¡Mensaje enviado con éxito! Te responderé pronto.'
        
        // Reset form
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
        
      } catch (error) {
        console.error('Error sending email:', error)
        this.submitSuccess = false
        this.submitMessage = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctame directamente en issabelpalacios@gmail.com'
      } finally {
        this.isSubmitting = false
        
        setTimeout(() => {
          this.submitMessage = ''
        }, 5000)
      }
    }
  }
}
</script>

