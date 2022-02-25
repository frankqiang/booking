import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'


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
]

const router = new VueRouter({
  routes
})

export default router
