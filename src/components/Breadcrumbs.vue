<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2 text-sm" role="list">
      <li>
        <router-link 
          to="/" 
          class="text-gray-400 hover:text-odoo-light transition-colors"
          aria-label="Ir a inicio"
        >
          Inicio
        </router-link>
      </li>
      <li v-for="(crumb, index) in crumbs" :key="index">
        <span class="text-gray-400" aria-hidden="true">/</span>
        <router-link
          v-if="!crumb.isLast"
          :to="crumb.path"
          class="text-gray-300 hover:text-odoo-light transition-colors"
          :aria-label="`Ir a ${crumb.label}`"
        >
          {{ crumb.label }}
        </router-link>
        <span 
          v-else 
          class="text-white font-semibold"
          aria-current="page"
        >
          {{ crumb.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    /**
     * Procesa los items de breadcrumb agregando flag de último elemento
     * @returns {Array} Array de breadcrumbs con estado isLast
     */
    crumbs() {
      return this.items.map((item, index) => ({
        ...item,
        isLast: index === this.items.length - 1
      }))
    }
  }
}
</script>

<style scoped>
.breadcrumbs {
  @apply mb-6;
}
</style>

