// https://nuxt.com/docs/api/configuration/nuxt-config
const isProduction = process.env.NUXT_NODE_ENV === 'production'


const isCSPEnabled = isProduction
console.log('isCSPEnabled',isCSPEnabled)
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
        enabled: isCSPEnabled,
        headers: {
            contentSecurityPolicy: {
                'frame-src': ["'self'", 'weather-panel.vercel.app'],
                'frame-ancestors': 'frame',
            },
            crossOriginEmbedderPolicy: false,
            xFrameOptions: false,
        },
    }
})


