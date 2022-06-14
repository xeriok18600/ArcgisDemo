import { defineConfig } from "vite";
const { resolve } = require('path')


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        map: resolve(__dirname, 'map.html')
      }
    }
  }
});
