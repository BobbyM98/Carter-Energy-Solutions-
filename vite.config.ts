import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using './' makes the paths relative to the index.html file. 
  // This ensures assets load correctly regardless of the repo name or trailing slashes.
  base: './', 
})