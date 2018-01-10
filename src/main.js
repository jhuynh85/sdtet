// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import vueSmoothScroll from 'vue-smooth-scroll'
import 'babel-polyfill'
import es6Promise from 'es6-promise'

es6Promise.polyfill()
Vue.config.productionTip = false
Vue.use(vueSmoothScroll)
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
