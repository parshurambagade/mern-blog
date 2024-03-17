import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': 'http://localhost:5000',
      '/api': 'http://localhost:5000',
      '/post': 'http://localhost:5000',
      '/user': 'http://localhost:5000'
    }
  },
  base: 'http://localhost:5000/'
})
