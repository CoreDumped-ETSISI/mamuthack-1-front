import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c8e2a4de = () => interopDefault(import('../pages/bookCatalogue.vue' /* webpackChunkName: "pages/bookCatalogue" */))
const _1ea4284b = () => interopDefault(import('../pages/bookManagement.vue' /* webpackChunkName: "pages/bookManagement" */))
const _f3a9bc0c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _13b7fca2 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _7fab36e7 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _c8f1ea80 = () => interopDefault(import('../pages/upload.vue' /* webpackChunkName: "pages/upload" */))
const _86f9023a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bookCatalogue",
    component: _c8e2a4de,
    name: "bookCatalogue"
  }, {
    path: "/bookManagement",
    component: _1ea4284b,
    name: "bookManagement"
  }, {
    path: "/login",
    component: _f3a9bc0c,
    name: "login"
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

export function createRouter () {
  return new Router(routerOptions)
}
