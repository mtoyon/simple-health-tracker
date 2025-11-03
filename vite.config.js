import { defineConfig } from 'vite'

export default defineConfig({
  base: '/simple-health-tracker/',
  esbuild: {
    jsx: 'automatic',
    jsxDev: true
  }
})