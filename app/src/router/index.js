import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import si from '../views/si.vue';
import PushYes from "@/views/PushYes"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/si',
    name: 'si',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: PushYes
  },

  {
    path: '/si2',
    name: 'si2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/si2.vue')
  },

  {
    path: '/siP',
    name: 'siP',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/siP.vue')
  },

  
  {
    path: '/siP2',
    name: 'siP2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/siP2.vue')
  },

  {
    path: '/registro',
    name: 'registro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/registro.vue')
  },

  {
    path: '/confirmacion',
    name: 'confirmacion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/confirmacion.vue')
  },

  {
    path:'/Ultima',
    name:'Ultima',

    component: () => import(/* webpackChunkName: "about" */'../views/Ultima.vue')

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
}
)

export default router
