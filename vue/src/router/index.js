import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import list from './module/list'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home

  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 魔法注释，就模板切割分离出来，作为一个单独的文件
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      auth:true,
      keep: false,
      title: '关于'
    }
  },
  list
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局守卫
router.beforeEach((to, from, next) => {
  if(to.meta && to.meta.auth && !window.login) {
    if(window.confirm('请登录')) {
      window.login = true;
      next();
    } else {
      next('/') // 回首页
    }
  } else {
    next();
  }
  
})


export default router
