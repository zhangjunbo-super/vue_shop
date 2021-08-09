import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/users/Users.vue'
import Categories from '../components/goods/Categories.vue'
import Goods from '../components/goods/Goods.vue'
import Orders from '../components/order/Orders.vue'
import Params from '../components/goods/Params.vue';
import Reports from '../components/report/Reports.vue';
import Rights from '../components/power/Rights.vue';
import Roles from '../components/power/Roles.vue';
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'

    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users },
        { path: '/categories', component: Categories },
        { path: '/goods', component: Goods },
        { path: '/orders', component: Orders },
        { path: '/params', component: Params },
        { path: '/reports', component: Reports },
        { path: '/rights', component: Rights },
        { path: '/roles', component: Roles }
      ]
    },
    // {
    //   path: '/roles', component: Roles
    // },

  ]
})

//挂载路由导航守卫
//必须有token才可以访问login之外的页面
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next();//如果访问的直接是login直接放行
  const token = window.sessionStorage.getItem("token")
  if (!token) return next('/login')//访问其他页面没有token返回登录界面
  next()//有token直接放行
})
export default router
