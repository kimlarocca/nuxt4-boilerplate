// link to Aura tokens to reference
//https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/aura/

import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import { root } from 'postcss'

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}'
    },
    borderRadius: {
      lg: "24px",
    },
    formField: {
      paddingX: "24px",
      paddingY: ".5rem",
      borderRadius: "{border.radius.lg}",
      focusRing: {
        width: "0",
        style: "none",
        color: "transparent",
        offset: "0",
        shadow: "none",
      },
      transitionDuration: "{transition.duration}",
    },
    colorScheme: {
      light: {
        text: {
          color: '{surface.950}',
        },
        primary: {
          color: '{sky.700}',
          inverseColor: '{surface.0}',
          hoverColor: '{sky.500}',
          activeColor: '{sky.500}'
        },
        highlight: {
          background: '{sky.100}',
        }
      },
      dark: {
        text: {
          color: '{surface.0}',
        },
        primary: {
          color: '{sky.500}',
          inverseColor: '{surface.950}',
          hoverColor: '{sky.300}',
          activeColor: '{sky.300}'
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    },
  },
  components: {
  }
})

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
        preset: MyPreset,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark-mode',
          cssLayer: false
        }
      }
    },
  },
})