export default defineNuxtConfig({
    devtools: {enabled: false},
    modules: [['@nuxtjs/google-fonts', {
        families: {
            Mulish: {
                wdht: [500, 600, 800]
            },
            Montserrat: {
                wdht: [600]
            }
        }
    }], '@nuxt/image', 'nuxt-icon'],
    css: ['~/assets/scss/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/scss/_vars.scss" as *;'
                }
            }
        }
    }
})