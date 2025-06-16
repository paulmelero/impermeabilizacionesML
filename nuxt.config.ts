import browserslist from 'browserslist'
import { browserslistToTargets, Rule } from 'lightningcss'

import { BRAND_DESCRIPTION, BRAND_NAME, BRAND_URL } from './config/brand'
// import { getServicesStatic, getPlacesStatic } from './core/getContent'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      BRAND_NAME,
    },
  },

  app: {
    head: {
      title: BRAND_NAME,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: BRAND_DESCRIPTION },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  vite: {
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        targets: browserslistToTargets(browserslist('>0.25%, not dead')),
      },
    },
    build: {
      cssMinify: 'lightningcss',
      sourcemap: false,
    },
  },

  css: ['@/assets/css/main.css'],

  // generate: {
  //   fallback: true,
  //   routes: [...getServicesStatic(), ...getPlacesStatic()],
  // },

  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-jsonld',
    '@nuxt/content',
  ],

  image: {
    // netlify provider is activated by default when using `pnpm netlify:dev`
  },
})
