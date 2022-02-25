import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 引入Nav组件
import Nav from '@/views/Nav.vue'

Vue.config.productionTip = false

// 注册全局组件
Vue.component('Nav',Nav)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
