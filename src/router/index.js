import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import register from '@/components/register/register'
import change from '@/components/change/change'
import home from '@/components/home/home'
import distake from '@/components/distake/distake'
import { basePort } from 'portfinder'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'login' } },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        requireAuth: true  
      },
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      
    },
    {
      path: '/change',
      name: 'change',
      component: change
    },
    {
      path:'*',
      name:'distake',
      component: distake,
      // redirect: { name: 'login' },
      // meta: {
      //   isLogin: true,  
      // },
    }
  ]
})
