// vite.config.js

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// UNOCSS
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss' // Presets

export default defineConfig({
  plugins: [vue(),
  Unocss({
    presets: [presetAttributify(),presetUno()], // Presets
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})