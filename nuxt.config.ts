// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // global css
  css: [
     'assets/styles/main.css'
  ],

  // Server middleware - handles backend communication
  serverMiddleware: [
    { path: '/api', handler: '~/api/server.js' }
  ],

  // server side rendering
  ssr: true,

  // proxy requests to the server
  vite:{
    server:{
      // proxy any requests starting with /api to https://localhost:5000
      proxy:{
        //string 
        '/*' : 'http://localhost:5000/api',
        //options
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
  
        }
      }
    }
  }

  
});
