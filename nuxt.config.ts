// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      
    title: 'Ban Pool villa',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss'],
  compatibilityDate: '2024-09-14',
});