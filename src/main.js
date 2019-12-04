// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import base from './public/base.css'
import axios from 'axios'
import login from './components/login/login.vue'

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
      if (JSON.parse(localStorage.getItem("islogin"))) {  
          next();
      }
      else {
          next({
              path: '/login',
          })
      }
  }
  else {
      next();
      
  }

})

