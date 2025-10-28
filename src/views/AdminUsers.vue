<template>
  <div class="admin-users">
    <h2 class="text-3xl font-bold mb-6">Gestión de Usuarios</h2>
    <div class="space-y-4">
      <div 
        v-for="(user, index) in mockUsers" 
        :key="index"
        class="glass--effect p-4 rounded-lg flex items-center justify-between"
      >
        <div>
          <h3 class="text-xl font-semibold text-white">{{ user.name }}</h3>
          <p class="text-gray-300 text-sm">{{ user.email }}</p>
        </div>
        <span class="px-3 py-1 bg-odoo-purple/30 text-white rounded-full text-sm">
          {{ user.role }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminUsers',
  data() {
    return {
      mockUsers: [
        { name: 'Isabel Palacios', email: 'issabelpalacios@gmail.com', role: 'Admin' },
        { name: 'Usuario Demo', email: 'demo@example.com', role: 'Usuario' }
      ]
    }
  },
  created() {
    console.log('AdminUsers view creada')
  },
  mounted() {
    console.log('AdminUsers view montada')
  },
  beforeUnmount() {
    console.log('AdminUsers view desmontando')
  }
}
</script>
