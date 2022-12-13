import { defineConfig } from 'vite'
import baseConfig from './vite.config'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    ...baseConfig,
    base: '/',
    server: {
        port: 8999
    },
    css: {
        postcss: {
            plugins: [
                autoprefixer()
            ]
        }
    }
})