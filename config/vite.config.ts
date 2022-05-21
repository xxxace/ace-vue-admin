import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import configStyleImportPlugin from './plugin/styleImport'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), configStyleImportPlugin()],
  resolve: {
    alias: [{
      find: '@',
      replacement: resolve(__dirname, '../src')
    }],
    extensions: ['.ts', '.js']
  }
})
