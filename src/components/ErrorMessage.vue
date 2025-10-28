<template>
  <div 
    class="error-message p-4 rounded-lg transition-all duration-300"
    :class="messageClasses"
    role="alert"
    :aria-live="isError ? 'assertive' : 'polite'"
  >
    <div class="flex items-start">
      <!-- Icon -->
      <div class="flex-shrink-0 mr-3">
        <svg 
          v-if="type === 'error'"
          class="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <svg 
          v-else-if="type === 'success'"
          class="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <svg 
          v-else
          class="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      
      <!-- Message -->
      <div class="flex-1">
        <h4 v-if="title" class="font-semibold mb-1">{{ title }}</h4>
        <p class="text-sm">{{ message }}</p>
      </div>
      
      <!-- Close button -->
      <button 
        v-if="dismissible"
        @click="$emit('dismiss')"
        class="flex-shrink-0 ml-3 text-current opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Cerrar mensaje"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    /**
     * Tipo de mensaje (error, success, warning, info)
     */
    type: {
      type: String,
      default: 'error',
      validator: (value) => ['error', 'success', 'warning', 'info'].includes(value)
    },
    /**
     * Mensaje a mostrar
     */
    message: {
      type: String,
      required: true
    },
    /**
     * Título opcional del mensaje
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * Permitir cerrar el mensaje
     */
    dismissible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isError() {
      return this.type === 'error'
    },
    messageClasses() {
      const baseClasses = 'transition-colors'
      
      const typeClasses = {
        error: 'bg-red-500/20 text-red-400 border border-red-500/30',
        success: 'bg-green-500/20 text-green-400 border border-green-500/30',
        warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
        info: 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
      }
      
      return `${baseClasses} ${typeClasses[this.type]}`
    }
  },
  emits: ['dismiss']
}
</script>

