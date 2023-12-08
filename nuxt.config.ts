// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@bootstrap-vue-next/nuxt',
        '@vueuse/nuxt',
        'nuxt-security'
    ],
    css: [
        'bootstrap/dist/css/bootstrap.min.css',
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css'
    ],
    build: {
        transpile: ['primevue']
    },
    security: {
        headers: {
            contentSecurityPolicy: {
                'frame-src': process.env.NODE_ENV === 'production' ? '*.wildberries.ru/*' : '*'
            }
        },
    },
})

