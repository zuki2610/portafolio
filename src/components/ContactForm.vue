<template>
  <div class="glass-effect p-8 rounded-xl neon-glow">
    <h3 class="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Name Field -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
          Nombre
        </label>
        <input 
          type="text" 
          id="name" 
          v-model="formData.name"
          required
          class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                 text-white focus:outline-none focus:border-odoo-purple transition-colors"
          placeholder="Tu nombre"
          aria-label="Nombre"
        />
      </div>
      
      <!-- Email Field -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input 
          type="email" 
          id="email" 
          v-model="formData.email"
          required
          class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                 text-white focus:outline-none focus:border-odoo-purple transition-colors"
          placeholder="tu@email.com"
          aria-label="Email"
        />
      </div>
      
      <!-- Subject Field -->
      <div>
        <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
          Asunto
        </label>
        <input 
          type="text" 
          id="subject" 
          v-model="formData.subject"
          required
          class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                 text-white focus:outline-none focus:border-odoo-purple transition-colors"
          placeholder="Sobre qué quieres hablar"
          aria-label="Asunto"
        />
      </div>
      
      <!-- Message Field -->
      <div>
        <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
          Mensaje
        </label>
        <textarea 
          id="message" 
          v-model="formData.message"
          required
          rows="5"
          class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                 text-white focus:outline-none focus:border-odoo-purple transition-colors resize-none"
          placeholder="Cuéntame sobre tu proyecto..."
          aria-label="Mensaje"
        ></textarea>
      </div>
      
      <!-- Submit Button -->
      <button 
        type="submit" 
        :disabled="isSubmitting"
        class="w-full button--primary py-3 disabled:opacity-50 disabled:cursor-not-allowed 
               focus:outline-none focus:ring-2 focus:ring-odoo-purple focus:ring-offset-2 focus:ring-offset-gray-800"
        :aria-label="isSubmitting ? 'Enviando mensaje, por favor espere' : 'Enviar mensaje de contacto'"
        :aria-busy="isSubmitting"
      >
        <span v-if="!isSubmitting">Enviar Mensaje</span>
        <span v-else class="flex items-center justify-center">
          <LoadingSpinner size="sm" />
          Enviando...
        </span>
      </button>
    </form>
    
    <!-- Message Display -->
    <ErrorMessage 
      v-if="submitMessage" 
      :type="submitSuccess ? 'success' : 'error'"
      :message="submitMessage"
      class="mt-4"
      dismissible
      @dismiss="clearMessage"
    />
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'
import LoadingSpinner from './LoadingSpinner.vue'
import ErrorMessage from './ErrorMessage.vue'

export default {
  name: 'ContactForm',
  components: {
    LoadingSpinner,
    ErrorMessage
  },
  data() {
    return {
      formData: {
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
  created() {
    // Inicializar EmailJS
    emailjs.init("4n4L5mm9sn0i8G23K")
  },
  methods: {
    /**
     * Maneja el envío del formulario
     */
    async handleSubmit() {
      this.isSubmitting = true
      this.submitMessage = ''
      
      // Destructuring de formData
      const { name, email, subject, message } = this.formData
      
      try {
        // Enviar email usando EmailJS
        const response = await emailjs.send(
          'service_eu774hm',     // Service ID
          'template_vjkxf8g',    // Template ID
          {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: 'issabelpalacios@gmail.com'
          }
        )
        
        console.log('Email sent!', response.status, response.text)
        
        this.submitSuccess = true
        this.submitMessage = '¡Mensaje enviado con éxito! Te responderé pronto.'
        
        // Reset form
        this.resetForm()
        
        // Emit event con los datos desestructurados
        this.$emit('submitted', { name, email, subject, message })
        
      } catch (error) {
        console.error('Error sending email:', error)
        this.submitSuccess = false
        this.submitMessage = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctame directamente en issabelpalacios@gmail.com'
        
        // Emit error event
        this.$emit('error', error)
      } finally {
        this.isSubmitting = false
        
        // Auto-clear message after 5 seconds if success
        if (this.submitSuccess) {
          setTimeout(() => {
            this.submitMessage = ''
          }, 5000)
        }
      }
    },
    /**
     * Resetea el formulario
     */
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    },
    /**
     * Limpia el mensaje de estado
     */
    clearMessage() {
      this.submitMessage = ''
    }
  },
  emits: ['submitted', 'error']
}
</script>

