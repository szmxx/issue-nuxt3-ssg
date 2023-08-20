/*
 * @Author: cola
 * @Date: 2023-07-16 11:13:17
 * @LastEditors: cola
 * @Description:
 */

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@unocss/nuxt'],
  runtimeConfig: {},
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: ['@unocss/reset/tailwind.css'],
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: [],
    },
  },
  app: {
    head: {
      viewport:
        'width=device-width,initial-scale=1,maximum-scale=1.0,user-scalable=0',
      link: [],
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1,maximum-scale=1.0, user-scalable=0',
        },
        { name: 'description', content: 'examples' },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
      ],
    },
  },
});
