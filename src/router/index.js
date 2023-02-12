import Vue from 'vue'
import VueRouter from 'vue-router'
import DealListView from '../pages/deal/DealListView.vue'
import DealDetailView from '../pages/deal/DealDetailView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/vue-templet/deal', // 초기 진입시 이동할 페이지
    // redirect: '/deal', // 초기 진입시 이동할 페이지
  },
  {
    path: '/vue-templet/deal',
    // path: '/deal',
    name: 'DealList',
    component: DealListView
  },
  {
    path: '/vue-templet/deal/:id',
    // path: '/deal/:id',
    name: 'DealDetail',
    component: DealDetailView
  },
  {
    path: '/vue-templet/shop',
    // path: '/shop',
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
