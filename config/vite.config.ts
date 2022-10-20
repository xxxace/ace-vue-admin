import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import configStyleImportPlugin from './plugin/styleImport'

const base = process.env.NODE_ENV ? '/' : '/'

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [vue(), vueJsx(), configStyleImportPlugin()],
  resolve: {
    alias: [{
      find: '@',
      replacement: resolve(__dirname, '../src')
    }, {
      find: 'vue',
      // https://v3.cn.vuejs.org/guide/installation.html#%E4%BD%BF%E7%94%A8-cdn-%E6%88%96%E6%B2%A1%E6%9C%89%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7
      replacement: 'vue/dist/vue.esm-bundler.js',
    }],
    extensions: ['.ts', '.js']
  },
  server: {
    port: 8999
  }
})
