import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< Updated upstream
const _11a7df5a = () => interopDefault(import('..\\pages\\bookManagement.vue' /* webpackChunkName: "pages_bookManagement" */))
const _5c2e9b3c = () => interopDefault(import('..\\pages\\createOffer.vue' /* webpackChunkName: "pages_createOffer" */))
const _bc4523ea = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _214d403b = () => interopDefault(import('..\\pages\\offerCatalogue.vue' /* webpackChunkName: "pages_offerCatalogue" */))
const _f1019530 = () => interopDefault(import('..\\pages\\pendingPage.vue' /* webpackChunkName: "pages_pendingPage" */))
const _4a5064b8 = () => interopDefault(import('..\\pages\\pendingPagePublisher.vue' /* webpackChunkName: "pages_pendingPagePublisher" */))
const _2559eaf1 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _4b7b2614 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages_search" */))
const _13c37e62 = () => interopDefault(import('..\\pages\\upload.vue' /* webpackChunkName: "pages_upload" */))
const _4f946a18 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
=======
const _1ea4284b = () => interopDefault(import('../pages/bookManagement.vue' /* webpackChunkName: "pages/bookManagement" */))
const _325511de = () => interopDefault(import('../pages/createOffer.vue' /* webpackChunkName: "pages/createOffer" */))
const _f3a9bc0c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _2e49892c = () => interopDefault(import('../pages/offerCatalogue.vue' /* webpackChunkName: "pages/offerCatalogue" */))
const _c7280bd2 = () => interopDefault(import('../pages/pendingPage.vue' /* webpackChunkName: "pages/pendingPage" */))
const _6f884456 = () => interopDefault(import('../pages/pendingPagePublisher.vue' /* webpackChunkName: "pages/pendingPagePublisher" */))
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
  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/bookManagement",
      component: _11a7df5a,
      name: "bookManagement"
    }, {
      path: "/createOffer",
      component: _5c2e9b3c,
      name: "createOffer"
    }, {
      path: "/login",
      component: _bc4523ea,
      name: "login"
    }, {
      path: "/offerCatalogue",
      component: _214d403b,
      name: "offerCatalogue"
    }, {
      path: "/pendingPage",
      component: _f1019530,
      name: "pendingPage"
    }, {
      path: "/pendingPagePublisher",
      component: _4a5064b8,
      name: "pendingPagePublisher"
    }, {
      path: "/register",
      component: _2559eaf1,
      name: "register"
    }, {
      path: "/search",
      component: _4b7b2614,
      name: "search"
    }, {
      path: "/upload",
      component: _13c37e62,
      name: "upload"
    }, {
      path: "/",
      component: _4f946a18,
      name: "index"
    }],

    fallback: false
  })
=======
export function createRouter () {
  return new Router(routerOptions)
>>>>>>> Stashed changes
}
