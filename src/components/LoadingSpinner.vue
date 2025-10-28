<template>
  <div class="flex flex-col items-center justify-center py-12">
    <div class="relative">
      <div 
        class="animate-spin rounded-full border-4 border-gray-800 border-t-odoo-purple"
        :class="spinnerSize"
      ></div>
      <div 
        v-if="showInner"
        class="absolute inset-0 animate-spin rounded-full border-4 border-gray-800 border-r-odoo-light"
        :class="spinnerSize"
        style="animation-direction: reverse; animation-duration: 0.8s"
      ></div>
    </div>
    <p v-if="message" :class="['mt-4 text-gray-300', textSize]">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    /**
     * Tamaño del spinner (sm, md, lg, xl)
     */
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
    },
    /**
     * Mensaje a mostrar debajo del spinner
     */
    message: {
      type: String,
      default: ''
    },
    /**
     * Mostrar spinner interno animado
     */
    showInner: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    spinnerSize() {
      const sizes = {
        sm: 'h-8 w-8',
        md: 'h-12 w-12',
        lg: 'h-16 w-16',
        xl: 'h-20 w-20'
      }
      return sizes[this.size]
    },
    textSize() {
      const sizes = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl'
      }
      return sizes[this.size]
    }
  }
}
</script>

