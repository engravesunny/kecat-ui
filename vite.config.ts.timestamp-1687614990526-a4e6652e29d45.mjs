// vite.config.ts
import { defineConfig } from "file:///E:/Front_Web/github/kecat-ui/node_modules/.store/vite@4.3.9/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/Front_Web/github/kecat-ui/node_modules/.store/@vitejs+plugin-vue@4.2.3/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///E:/Front_Web/github/kecat-ui/node_modules/.store/vite-plugin-dts@2.3.0/node_modules/vite-plugin-dts/dist/index.mjs";
import * as path from "path";
import postcssMixins from "file:///E:/Front_Web/github/kecat-ui/node_modules/.store/postcss-mixins@9.0.4/node_modules/postcss-mixins/index.js";
import postcssRem from "file:///E:/Front_Web/github/kecat-ui/node_modules/.store/postcss-rem@2.0.4/node_modules/postcss-rem/index.js";
import Delete from "file:///E:/Front_Web/github/kecat-ui/node_modules/.store/rollup-plugin-delete@2.0.0/node_modules/rollup-plugin-delete/dist/index.cjs.js";
var __vite_injected_original_dirname = "E:\\Front_Web\\github\\kecat-ui";
var vite_config_default = defineConfig({
  server: {
    open: true,
    port: 4e3
  },
  plugins: [
    dts({
      outputDir: "dist",
      staticImport: true,
      insertTypesEntry: true
    }),
    vue()
  ],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "kecat-ui-lib",
      fileName: (format) => `kecat-ui-${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      },
      plugins: [
        Delete({
          targets: ["dist/*.{ico,txt,svg}"],
          hook: "generateBundle"
        })
      ]
    }
  },
  css: {
    postcss: {
      plugins: [postcssMixins, postcssRem]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  test: {
    environment: "happy-dom"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxGcm9udF9XZWJcXFxcZ2l0aHViXFxcXGtlY2F0LXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxGcm9udF9XZWJcXFxcZ2l0aHViXFxcXGtlY2F0LXVpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9Gcm9udF9XZWIvZ2l0aHViL2tlY2F0LXVpL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuLy8gdml0ZVxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG4vLyBwYXRoXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXG5cbi8vIHBvc3Rjc3NcbmltcG9ydCBwb3N0Y3NzTWl4aW5zIGZyb20gJ3Bvc3Rjc3MtbWl4aW5zJ1xuaW1wb3J0IHBvc3Rjc3NSZW0gZnJvbSAncG9zdGNzcy1yZW0nXG5cbi8vIHJvbGx1cFxuaW1wb3J0IERlbGV0ZSBmcm9tICdyb2xsdXAtcGx1Z2luLWRlbGV0ZSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgc2VydmVyOiB7XG4gICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgIHBvcnQ6IDQwMDAsXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIGR0cyh7XG4gICAgICAgICAgICBvdXRwdXREaXI6ICdkaXN0JyxcbiAgICAgICAgICAgIHN0YXRpY0ltcG9ydDogdHJ1ZSxcbiAgICAgICAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgICB2dWUoKSxcbiAgICBdLFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIGxpYjoge1xuICAgICAgICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcbiAgICAgICAgICAgIG5hbWU6ICdrZWNhdC11aS1saWInLFxuICAgICAgICAgICAgZmlsZU5hbWU6IGZvcm1hdCA9PiBga2VjYXQtdWktJHtmb3JtYXR9LmpzYCxcbiAgICAgICAgfSxcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZ1ZTogJ1Z1ZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgRGVsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogWydkaXN0Lyoue2ljbyx0eHQsc3ZnfSddLFxuICAgICAgICAgICAgICAgICAgICBob29rOiAnZ2VuZXJhdGVCdW5kbGUnLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgICBwb3N0Y3NzOiB7XG4gICAgICAgICAgICBwbHVnaW5zOiBbcG9zdGNzc01peGlucywgcG9zdGNzc1JlbV0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRlc3Q6IHtcbiAgICAgICAgZW52aXJvbm1lbnQ6ICdoYXBweS1kb20nLFxuICAgIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUVoQixPQUFPLFNBQVM7QUFFaEIsWUFBWSxVQUFVO0FBR3RCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sZ0JBQWdCO0FBR3ZCLE9BQU8sWUFBWTtBQWJuQixJQUFNLG1DQUFtQztBQWdCekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsUUFBUTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLElBQUk7QUFBQSxNQUNBLFdBQVc7QUFBQSxNQUNYLGNBQWM7QUFBQSxNQUNkLGtCQUFrQjtBQUFBLElBQ3RCLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSCxLQUFLO0FBQUEsTUFDRCxPQUFZLGFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQzdDLE1BQU07QUFBQSxNQUNOLFVBQVUsWUFBVSxZQUFZO0FBQUEsSUFDcEM7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNYLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ0osU0FBUztBQUFBLFVBQ0wsS0FBSztBQUFBLFFBQ1Q7QUFBQSxNQUNKO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDTCxPQUFPO0FBQUEsVUFDSCxTQUFTLENBQUMsc0JBQXNCO0FBQUEsVUFDaEMsTUFBTTtBQUFBLFFBQ1YsQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0QsU0FBUztBQUFBLE1BQ0wsU0FBUyxDQUFDLGVBQWUsVUFBVTtBQUFBLElBQ3ZDO0FBQUEsRUFDSjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsS0FBVSxhQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUN0QztBQUFBLEVBQ0o7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNGLGFBQWE7QUFBQSxFQUNqQjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
