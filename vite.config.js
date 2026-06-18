import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  base: '/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js', // Match this to your setup filename if applicable
  },
})
