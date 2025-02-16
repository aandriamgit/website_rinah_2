import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        portfolio: resolve(__dirname, 'pages/portfolio.html'),
		services: resolve(__dirname, './pages/services.html'),
		a_propos: resolve(__dirname, './pages/a_propos.html'),
		contact: resolve(__dirname, './pages/contact.html')
      },
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: 'assets/[name].js'
      }
    }
  },
  server: {
    open: '/index.html',
    port: 3000
  }
})
