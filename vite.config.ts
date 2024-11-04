import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import webfontDownload from 'vite-plugin-webfont-dl'
import i18nextLoader from 'vite-plugin-i18next-loader'
// TODO: configure the vite-plugin-i18next-loader-plugin see: https://github.com/alienfast/vite-plugin-i18next-loader?tab=readme-ov-file#usage

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
    ]),
    /* i18nextLoader({
      paths: ['./node_modules/erv-protectr-app/locales', './locales'],
    }), */
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/foo': 'http://localhost:4567',
      '/api': {
        target: 'http://protectr.procilon.test/wfa18',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
