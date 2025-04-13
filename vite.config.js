import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
 build:{
   rollupOptions:{
     input:{
       crud:"crud.html",
       index :"index.html"
     }
   }
 }
})
