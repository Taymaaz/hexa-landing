export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-icon',
    ],
    app: {

        pageTransition: {
            name: "page",
            mode: "out-in",
        },
    },
})
