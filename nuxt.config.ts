import i18nConfig from "./config/i18n";
import appConfig from "./config/appConfig";
// https://nuxt.com/docs/api/configuration/nuxt-config
import elementPlusConfig from "../admin/config/elementPlusConfig";
import authConfig from "./config/auth";
import runtimeConfig from './config/runtimeConfig';
import fontConfig from './config/frontConfig';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  //devtools: { enabled: true },

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

  auth: authConfig,
  i18n: i18nConfig,
  googleFonts: fontConfig,
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
