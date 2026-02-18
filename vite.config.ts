import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://bobbym98.github.io/Carter-Energy-Solutions-/'
    })
  ],
  // Explicit base path matches your GitHub Pages repository URL
  base: '/Carter-Energy-Solutions-/', 
})
