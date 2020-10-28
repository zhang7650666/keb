import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import list from './module/list'
import Layout from '@/layout'; // 布局页
Vue.use(VueRouter)

export const constRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login.vue')
  },
  {
    path: "/",
    component: Layout, // 应用布局
    redirect: "/home",
    children: [{
      path: "home",
      component: () =>
        import( /* webpackChunkName: "home" */ "@/views/Home.vue"),
      name: "home",
      meta: {
        title: "Home", // 导航菜单项标题
        icon: "xx" // 导航菜单项图标
      }
    }]
  }
]
export const asyncRoutes = [{
    path: "/about",
    component: Layout, // 应用布局
    redirect: "/about/index",
    children: [{
        path: "index",
        component: () =>
          import( /* webpackChunkName: "home" */ "@/views/About.vue"),
        name: "about",
        meta: {
          title: "about", // 导航菜单项标题
          icon: "xx", // 导航菜单项图标
          roles: ['admin']
        }
      },
    ]
  }

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRoutes
})

// 全局守卫
// router.beforeEach((to, from, next) => {
//   if(to.meta && to.meta.auth && !window.login) {
//     if(window.confirm('请登录')) {
//       window.login = true;
//       next();
//     } else {
//       next('/') // 回首页
//     }
//   } else {
//     next();
//   }

// })


export default router
