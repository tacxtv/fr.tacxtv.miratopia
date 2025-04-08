import { readFileSync } from 'fs'
import { defineNuxtConfig } from 'nuxt/config'
import * as consola from 'consola'
import tailwindcss from '@tailwindcss/vite'

let sslCfg = <any>{}
if (/yes|1|on|true/i.test(`${process.env.APP_HTTPS_ENABLED}`)) {
  try {
    sslCfg.https = {
      key: readFileSync(`${process.env.APP_HTTPS_PATH_KEY}`, 'utf8'),
      cert: readFileSync(`${process.env.APP_HTTPS_PATH_CERT}`, 'utf8'),
    };
    consola.info('[Nuxt] SSL certificates loaded successfully')
  } catch (error) {
    consola.warn('[Nuxt] Error while reading SSL certificates', error)
  }
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  ssr: false,
  telemetry: false,
  pages: true,
  srcDir: 'src',

  debug: !!process.env.DEBUG,
  devServer: {
    port: 3000,
    ...sslCfg,
  },

  devtools: {
    enabled: process.env.NODE_ENV === 'development',
    timeline: {
      enabled: true,
    },
  },

  css: ['~/assets/styles/main.css'],
  plugins: [],
  components: {
    global: true,
    dirs: [{ path: '~/components' }],
  },

  appConfig: {
    appManagerVersion: process.env.npm_package_version,
  },

  app: {
    head: {
      title: 'Miratopia',
      titleTemplate: '%s | Miratopia',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ]
    }
  },

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    '@nuxt/devtools',
  ],

  dayjs: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    defaultTimezone: 'Paris',
    plugins: ['timezone', 'relativeTime'],
  },

  vite: {
    define: {
      'process.env.DEBUG': process.env.NODE_ENV === 'development',
    },
    plugins: [
      tailwindcss(),
    ],
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  },

  pinia: {
    storesDirs: ['~/stores'],
  },
})
