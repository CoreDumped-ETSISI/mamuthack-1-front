import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1ea4284b = () => interopDefault(import('../pages/bookManagement.vue' /* webpackChunkName: "pages/bookManagement" */))
const _325511de = () => interopDefault(import('../pages/createOffer.vue' /* webpackChunkName: "pages/createOffer" */))
const _f3a9bc0c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _2e49892c = () => interopDefault(import('../pages/offerCatalogue.vue' /* webpackChunkName: "pages/offerCatalogue" */))
const _c7280bd2 = () => interopDefault(import('../pages/pendingPage.vue' /* webpackChunkName: "pages/pendingPage" */))
const _6f884456 = () => interopDefault(import('../pages/pendingPagePublisher.vue' /* webpackChunkName: "pages/pendingPagePublisher" */))
const _13b7fca2 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _7fab36e7 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _86f9023a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bookManagement",
    component: _1ea4284b,
    name: "bookManagement"
  }, {
    path: "/createOffer",
    component: _325511de,
    name: "createOffer"
  }, {
    path: "/login",
    component: _f3a9bc0c,
    name: "login"
  }, {
    path: "/offerCatalogue",
    component: _2e49892c,
    name: "offerCatalogue"
  }, {
    path: "/pendingPage",
    component: _c7280bd2,
    name: "pendingPage"
  }, {
    path: "/pendingPagePublisher",
    component: _6f884456,
    name: "pendingPagePublisher"
  }, {
    path: "/register",
    component: _13b7fca2,
    name: "register"
  }, {
    path: "/search",
    component: _7fab36e7,
    name: "search"
  }, {
    path: "/",
    component: _86f9023a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
