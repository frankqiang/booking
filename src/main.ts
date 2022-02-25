import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 引入Nav组件
import Nav from './views/Nav.vue'
// 引入Layout组件
import Layout from './views/Layout.vue'

Vue.config.productionTip = false

// 注册全局组件
Vue.component('Nav',Nav)
// 注册全局Layout组件
Vue.component('Layout',Layout)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
