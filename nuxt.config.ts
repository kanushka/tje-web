// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        baseURL: "/",
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            htmlAttrs: {
                lang: "en",
            },
            link: [
                { rel: "canonical", href: "https://tjengineering.lk" },
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            ],
        },
    },
    modules: [
        [
            "@nuxtjs/i18n",
            {
                /* module options */
            },
        ],
        '@nuxt/image-edge',
    ],
});
