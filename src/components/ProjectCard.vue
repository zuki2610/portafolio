<template>
  <div 
    class="card-hover neon-glow p-6 rounded-xl glass-effect cursor-pointer"
    @click="navigateToProject"
    @mouseenter="handleHover(true)"
    @mouseleave="handleHover(false)"
    role="button"
    tabindex="0"
    :aria-label="`Ver detalles del proyecto ${project.title}`"
    @keyup.enter="navigateToProject"
  >
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-3">
        <div class="w-12 h-12 rounded-lg bg-odoo-purple flex items-center justify-center">
          <span class="text-2xl">{{ icon }}</span>
        </div>
        <div>
          <h3 class="text-xl font-bold text-white">{{ project.title }}</h3>
          <p class="text-gray-400 text-sm">{{ project.category }}</p>
        </div>
      </div>
      
      <div v-if="isAnimated" class="absolute top-4 right-4 animate-spin-slow">
        <div class="w-8 h-8 border-2 border-odoo-purple border-t-transparent rounded-full"></div>
      </div>
    </div>
    
    <p class="text-gray-300 mb-4">{{ project.description }}</p>
    
    <div class="flex flex-wrap gap-2 mb-4">
      <span 
        v-for="tech in project.technologies" 
        :key="tech"
        class="px-3 py-1 bg-odoo-purple/30 rounded-full text-xs text-white"
      >
        {{ tech }}
      </span>
    </div>
    
    <div class="flex items-center justify-between">
      <span class="text-sm text-gray-400">{{ project.date }}</span>
      <span class="text-odoo-light font-semibold flex items-center">
        Ver detalles
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isAnimated: false
    }
  },
  computed: {
    icon() {
      return this.project.icon || '🚀'
    }
  },
  methods: {
    navigateToProject() {
      this.$router.push(`/project/${this.project.id}`)
    },
    handleHover(isHovering) {
      this.isAnimated = isHovering
    }
  }
}
</script>

<style scoped>
.card-hover {
  position: relative;
  overflow: hidden;
}

.card-hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(135, 90, 124, 0.2), transparent);
  transition: left 0.5s;
}

.card-hover:hover::before {
  left: 100%;
}
</style>

