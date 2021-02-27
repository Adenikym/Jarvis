import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/login',
    name: 'login',
    
    component: () => import(/* webpackChunkName: "login" */ '../views/studentLogin.vue')
  },
  {
    path:'/student-signup',
    name:'student-signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/studentregister.vue')
  },
  {
    path: '/body',
    name: 'body',
    
    component: () => import(/* webpackChunkName: "body" */ '../views/bodyregister.vue')
  },

{
    path: '/body-profile',
    name: 'body-profile',
    
    component: () => import(/* webpackChunkName: "body-profile" */ '../views/bodyprofile.vue')
  },
  {
    path:'/payment-history',
    name:'payment-history',
    component: () => import(/* webpackChunkName: "paymenthistory" */ '../views/paymenthistory.vue')
  },

  {
    path:'/student-profile',
    name:'student-profile',
    component: () => import(/* webpackChunkName: "studentprofile" */ '../views/studentprofile.vue')
  },
 
  {
    path:'/dues',
    name:'dues',
    component: () => import(/* webpackChunkName: "studentprofile" */ '../views/Dues.vue')
  },
  {
    path:'/create-due',
    name:'create-due',
    component: () => import(/* webpackChunkName: "createdue" */ '../views/createdue.vue')
  },

  {
    path:'/initiate-pay',
    name:'initate-pay',
    component: () => import(/* webpackChunkName: "createdue" */ '../views/makepay.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
