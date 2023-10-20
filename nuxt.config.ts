import i18nConfig from "./config/i18n";
import appConfig from "./config/appConfig";
// https://nuxt.com/docs/api/configuration/nuxt-config
import elementPlusConfig from "../admin/config/elementPlusConfig";
import authConfig from "./config/auth";
import runtimeConfig from './config/runtimeConfig';
import fontConfig from './config/frontConfig';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: runtimeConfig,
  app:  appConfig,

  // css
  css: ['~/assets/scss/app.scss'],

  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    ['@pinia/nuxt', {
      autoImports: ["defineStore", "acceptHMRUpdate"],
    }],
    '@element-plus/nuxt',
    '@nuxtjs/color-mode',
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
    "@nuxtjs/i18n"
  ],

  plugins: [
    { src: './plugins/useBootstrap.client.ts', mode: 'client' },
  ],
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
    locales: [
      {
        icon: 'flag-icon-us',
        code: "en",
        name: "English",
        short: '(US)',
      },
      {
        icon: 'flag-icon-fr',
        code: "fr",
        name: "Français",
      },
      {
        icon: 'flag-icon-es',
        code: "es",
        name: "Español",
      },
      {
        icon: 'flag-icon-pt',
        short: '(BR)',
        code: "pt",
        name: "Português",
      },
    ],
    vueI18n: "./i18n.config.ts"
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // colorMode
  colorMode: {
    classSuffix: '',
  },

  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
  build: {
    transpile: [
      'trpc-nuxt'
    ]
  }
})
