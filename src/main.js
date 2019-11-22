// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import VueRouter from 'vue-router'
import master from './components/layouts/master'

Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { master },
  template: '<master/>'
})
