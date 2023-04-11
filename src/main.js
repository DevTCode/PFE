import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import LaravelVuePagination from 'laravel-vue-pagination'
import JwPagination from 'jw-vue-pagination';
import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import { loadFonts } from './plugins/webfontloader'

export default {
  components: {
    'Pagination' : LaravelVuePagination
  }
}
loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(bootstrap)
  .mount('#app')
  
  
