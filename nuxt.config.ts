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

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: `%s - ${BRAND_NAME} - Expertos en impermeabilización de cubiertas y terrazas.`,
    title: BRAND_NAME,
    description: BRAND_DESCRIPTION,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: BRAND_DESCRIPTION },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // generate: {
  //   fallback: true,
  //   routes: [...getServicesStatic(), ...getPlacesStatic()],
  // },

  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
  ],
})
