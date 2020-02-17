import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import SideNav from '@/components/SideNav.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sidenav',
    component: SideNav,
    // redirect: "/dashboard",
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),      
        // meta: {
        //   requiresAuth: true
        // }  
        
      }      
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/landing',
    name: 'landing',
    component: () => import('../views/Landing.vue')
  },
  {
    path: '/landing2',
    name: 'landing2',
    component: () => import('../views/Landing2.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.getLoggedIn) {
      //Redirect to the login page
      next('/login')
    } else {
      next()
    }
  }
  else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.getLoggedIn) {
      //Redirect to the contact page if logged in
      next('/profile') //If information is on the store
    } else {
      next()
    }
  } else {
    next()
  }
})



export default router
