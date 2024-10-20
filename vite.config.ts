import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pwa-experiment",
  plugins: [react(), VitePWA({
    strategies: 'injectManifest',
    srcDir: 'src',
    
    filename: 'sw.ts',
    registerType: 'autoUpdate',
    injectRegister: "inline",

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'experiment-pwa',
      short_name: 'experiment-pwa',
      description: 'simple experiment with pwa\'s',
      theme_color: '#ffffff',
    },

    injectManifest: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
    },

    devOptions: {
      enabled: true,
      navigateFallback: 'index.html',
      suppressWarnings: false,
      type: 'module',
    },
  })],
})