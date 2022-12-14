import { defineConfig } from 'vite'
import baseConfig from './vite.config'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    ...baseConfig,
    base: '/ace-vue-admin',
    css: {
        postcss: {
            plugins: [
                autoprefixer()
            ]
        }
    }
})