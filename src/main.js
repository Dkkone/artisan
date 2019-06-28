import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee ,faUser,faAddressCard,faKey,faRedo} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'
import routes from './routes'
import VueResource from 'vue-resource'
import { Pagination } from 'bootstrap-vue/es/components'
Vue.use(Pagination)
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
library.add(faCoffee,faUser,faAddressCard,faKey,faRedo)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const router = new VueRouter({routes});

new Vue({
  router,
  el: '#app',
  data: {
    debug: true,
    users: [],
  },
  render: h => h(App)
});
