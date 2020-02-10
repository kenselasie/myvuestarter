import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'


import Snotify from 'vue-snotify'

import 'vue-snotify/styles/material.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'remixicon/fonts/remixicon.css'


Vue.config.productionTip = false

Vue.use(Snotify)
Vue.use(require('vue-moment'))
Vue.use(VModal)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
