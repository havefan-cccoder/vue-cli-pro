import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '',
        name: 'start',
        component: () => import('./views/start.vue'),
        children:[{
            path: '/start',
            name: 'home',
            component: Home
          },
          {
            path: '/start/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
          },
          {
            path: '/start/todolist',
            name: 'todolist',
            component: () => import('./views/todolist.vue')
          },
          {
            path: '/start/calculator',
            name: 'calculator',
            component: () => import('./views/calculator.vue')
          },
        ]
    },
    {
        path: '/lightmodel',
        name: 'lightmodel',
        component: () => import('./views/Lightmodel.vue'), 
        children: [
            {
                path: 'quickmodel',
                component: () => import('./views/lightmodel/quickmodel.vue')
            },
            {
                path: 'modelbase',
                component: () => import('./views/lightmodel/modelbase.vue')
            },
            {
                path: 'resourcepool',
                component: () => import('./views/lightmodel/resourcepool.vue')
            }
        ]
    }
  ]
})
