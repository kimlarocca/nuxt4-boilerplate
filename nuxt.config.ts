import Lara from '@primeuix/themes/lara'

export default defineNuxtConfig({
  compatibilityDate: '2025-10-26',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module'
  ],

  css: [
    '~/assets/css/tailwind.css',
    'primeicons/primeicons.css',
    '~/assets/scss/main.scss'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  primevue: {
    autoImport: true,
    options: {
      ripple: true,
      theme: {
        preset: Lara,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark-mode',
          cssLayer: false
        }
      }
    },
  },
})