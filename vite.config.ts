/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// vite
import dts from 'vite-plugin-dts'
// path
import * as path from 'path'

// postcss
import postcssMixins from 'postcss-mixins'
import postcssRem from 'postcss-rem'

// rollup
import Delete from 'rollup-plugin-delete'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        open: true,
        port: 4000,
    },
    plugins: [
        dts({
            outputDir: 'dist',
            staticImport: true,
            insertTypesEntry: true,
        }),
        vue(),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'kecat-ui-lib',
            fileName: format => `kecat-ui-${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
            plugins: [
                Delete({
                    targets: ['dist/*.{ico,txt,svg}'],
                    hook: 'generateBundle',
                }),
            ],
        },
    },
    css: {
        postcss: {
            plugins: [postcssMixins, postcssRem],
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    test: {
        environment: 'happy-dom',
    },
})
