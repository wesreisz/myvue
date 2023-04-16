import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@okta/okta-vue'
import HomeView from '../views/HomeView.vue'
import { LoginCallback, navigationGuard } from '@okta/okta-vue'
import { OktaAuth } from '@okta/okta-auth-js'
import config from '@/config'

Vue.use(VueRouter)
console.log(process.env.oktaClientID)
const oktaAuth= new OktaAuth(config.oidc)
Vue.use(Auth, { oktaAuth })

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/additional',
    name: 'additional',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdditionalView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login/callback?post_login_redirect_uri=https://zealous-moss-036a59610.3.azurestaticapps.net/about',
    name: 'login',
    component: LoginCallback
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(navigationGuard)

export default router
