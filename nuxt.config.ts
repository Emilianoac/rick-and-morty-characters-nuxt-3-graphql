// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Rick and Morty Characters",
    },
  },
  devtools: { enabled: true },
  modules: [
    "nuxt-graphql-client",
    "@nuxt/ui",
  ],

  "graphql-client": {
    codegen: false
  }
})
