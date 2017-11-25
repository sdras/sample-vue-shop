import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _2fd71ff0 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _473ed934 = () => import('../pages/women.vue' /* webpackChunkName: "pages/women" */).then(m => m.default || m)
const _7edf9a8c = () => import('../pages/men.vue' /* webpackChunkName: "pages/men" */).then(m => m.default || m)
const _f587b74c = () => import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */).then(m => m.default || m)
const _0f8303fe = () => import('../pages/sale.vue' /* webpackChunkName: "pages/sale" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _2fd71ff0,
			name: "index"
		},
		{
			path: "/women",
			component: _473ed934,
			name: "women"
		},
		{
			path: "/men",
			component: _7edf9a8c,
			name: "men"
		},
		{
			path: "/cart",
			component: _f587b74c,
			name: "cart"
		},
		{
			path: "/sale",
			component: _0f8303fe,
			name: "sale"
		}
    ],
    fallback: false
  })
}
