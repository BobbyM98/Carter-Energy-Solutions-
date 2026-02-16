import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: The base must match your GitHub repository name exactly, surrounded by slashes.
  // Based on your screenshot URL, the repo path is "/Carter-Energy-Solutions-/"
  base: '/Carter-Energy-Solutions-/', 
})