import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _11a7df5a = () => interopDefault(import('..\\pages\\bookManagement.vue' /* webpackChunkName: "pages_bookManagement" */))
const _5c2e9b3c = () => interopDefault(import('..\\pages\\createOffer.vue' /* webpackChunkName: "pages_createOffer" */))
const _bc4523ea = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _214d403b = () => interopDefault(import('..\\pages\\offerCatalogue.vue' /* webpackChunkName: "pages_offerCatalogue" */))
const _f1019530 = () => interopDefault(import('..\\pages\\pendingPage.vue' /* webpackChunkName: "pages_pendingPage" */))
const _4a5064b8 = () => interopDefault(import('..\\pages\\pendingPagePublisher.vue' /* webpackChunkName: "pages_pendingPagePublisher" */))
const _2559eaf1 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _4b7b2614 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages_search" */))
const _4f946a18 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

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
      path: "/",
      component: _4f946a18,
      name: "index"
    }],

    fallback: false
  })
}
