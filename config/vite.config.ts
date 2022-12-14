import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import configStyleImportPlugin from './plugin/styleImport'

// https://vitejs.dev/config/
export default {
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
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          echarts: ['echarts'],
          layout: [
            resolve(__dirname, '../src/components/Layout/index.vue'),
            resolve(__dirname, '../src/components/Layout/PageView.vue'),
            resolve(__dirname, '../src/components/Header/index.vue'),
            resolve(__dirname, '../src/components/Footer/index.vue'),
            resolve(__dirname, '../src/components/Menu/index.vue'),
            resolve(__dirname, '../src/components/NavBar/index.vue')
          ]
        }
      }
    }
  }
}
