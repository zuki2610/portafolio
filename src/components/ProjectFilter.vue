<template>
  <div class="flex flex-wrap justify-center gap-4 mb-12">
    <button 
      v-for="category in categories" 
      :key="category"
      @click="handleCategorySelect(category)"
      :class="[
        'px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-odoo-purple',
        selectedCategory === category 
          ? 'bg-odoo-purple text-white shadow-lg neon-glow' 
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      ]"
      :aria-label="`Filtrar por categoría ${category}`"
      :aria-pressed="selectedCategory === category"
    >
      {{ category }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProjectFilter',
  props: {
    /**
     * Array de categorías disponibles
     */
    categories: {
      type: Array,
      required: true
    },
    /**
     * Categoría seleccionada actualmente
     */
    selectedCategory: {
      type: String,
      required: true
    }
  },
  methods: {
    /**
     * Maneja la selección de una categoría y emite el evento
     * @param {string} category - Categoría seleccionada
     */
    handleCategorySelect(category) {
      this.$emit('category-selected', category)
    }
  },
  emits: ['category-selected']
}
</script>

