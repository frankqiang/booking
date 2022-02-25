import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '../views/Money.vue'
import Labels from '../views/Labels.vue'
import Statistics from '../views/Statistics.vue'
import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)

const routes = [
  // 默认路径
  {
    path:'/',
    // 重定向到money路径
    redirect:'/money'
  },
  {
    path: '/money',
    component: Money
  }, 
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  // 404路由，如果上面所有配置的路径都找不到，那么就会进入该路由
  {
    path: '*',
    component: NotFound
  },
]

const router = new VueRouter({
  routes
})

export default router
