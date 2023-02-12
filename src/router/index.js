import Vue from 'vue'
import VueRouter from 'vue-router'
import DealView from '../pages/deal/DealView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/deal', // 초기 진입시 이동할 페이지
  },
  {
    path: '/deal',
    name: 'Deal',
    component: DealView
  },
  {
    path: '/shop',
    name: 'Shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/shop/ShopView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
