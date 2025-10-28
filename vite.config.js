import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Base para desarrollo y Netlify (no necesitamos /portafolio/)
  base: '/'
})

