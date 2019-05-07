import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// import VueResource from 'vue-resource'
// Vue.use(VueResource);

Vue.config.productionTip = false

// Vue.prototype.HOST='/master'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
