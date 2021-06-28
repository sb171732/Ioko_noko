import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Rez from '../views/Rez.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'rez',
    component: Rez
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dou:code',
    name: 'Dou',
    component: () => import('../views/Dou.vue')
  },
  {
    path: '/rez',
    name: 'Rez',
    component: () => import('../views/Rez.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
