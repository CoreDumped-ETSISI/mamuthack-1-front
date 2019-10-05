import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< Updated upstream
const _fd3556ee = () => interopDefault(import('..\\pages\\bookManagement.vue' /* webpackChunkName: "pages_bookManagement" */))
const _47b038da = () => interopDefault(import('..\\pages\\createOffer.vue' /* webpackChunkName: "pages_createOffer" */))
const _5a3cd008 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _ddea952c = () => interopDefault(import('..\\pages\\offerCatalogue.vue' /* webpackChunkName: "pages_offerCatalogue" */))
const _38e6af60 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _6c78fdb6 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages_search" */))
const _34c15604 = () => interopDefault(import('..\\pages\\upload.vue' /* webpackChunkName: "pages_upload" */))
const _0939f4e5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
=======
const _1ea4284b = () => interopDefault(import('../pages/bookManagement.vue' /* webpackChunkName: "pages/bookManagement" */))
const _f3a9bc0c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _2e49892c = () => interopDefault(import('../pages/offerCatalogue.vue' /* webpackChunkName: "pages/offerCatalogue" */))
const _13b7fca2 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _7fab36e7 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _c8f1ea80 = () => interopDefault(import('../pages/upload.vue' /* webpackChunkName: "pages/upload" */))
const _86f9023a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> Stashed changes

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
    path: "/login",
    component: _f3a9bc0c,
    name: "login"
  }, {
    path: "/offerCatalogue",
    component: _2e49892c,
    name: "offerCatalogue"
  }, {
    path: "/register",
    component: _13b7fca2,
    name: "register"
  }, {
    path: "/search",
    component: _7fab36e7,
    name: "search"
  }, {
    path: "/upload",
    component: _c8f1ea80,
    name: "upload"
  }, {
    path: "/",
    component: _86f9023a,
    name: "index"
  }],

  fallback: false
}

<<<<<<< Updated upstream
export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/bookManagement",
      component: _fd3556ee,
      name: "bookManagement"
    }, {
      path: "/createOffer",
      component: _47b038da,
      name: "createOffer"
    }, {
      path: "/login",
      component: _5a3cd008,
      name: "login"
    }, {
      path: "/offerCatalogue",
      component: _ddea952c,
      name: "offerCatalogue"
    }, {
      path: "/register",
      component: _38e6af60,
      name: "register"
    }, {
      path: "/search",
      component: _6c78fdb6,
      name: "search"
    }, {
      path: "/upload",
      component: _34c15604,
      name: "upload"
    }, {
      path: "/",
      component: _0939f4e5,
      name: "index"
    }],

    fallback: false
  })
=======
export function createRouter () {
  return new Router(routerOptions)
>>>>>>> Stashed changes
}
