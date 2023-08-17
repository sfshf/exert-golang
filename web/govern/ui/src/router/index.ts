import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignInView from '@/views/SignInView.vue'
import MenuView from '@/views/MenuView.vue'
import RoleView from '@/views/RoleView.vue'
import DomainView from '@/views/DomainView.vue'
import StaffView from '@/views/StaffView.vue'
import ChangeLogView from '@/views/ChangeLogView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'system',
        name: 'system',
        component: null,
        children: [
          {
            path: 'menu',
            component: MenuView,
            name: 'menu',
            children: []
          },
          {
            path: 'role',
            component: RoleView,
            name: 'role',
            children: []
          },
          {
            path: 'domain',
            component: DomainView,
            name: 'domain',
            children: []
          },
          {
            path: 'staff',
            component: StaffView,
            name: 'staff',
            children: []
          }
        ]
      },
      {
        path: 'log',
        name: 'log',
        component: null,
        children: [
          {
            path: 'changeLog',
            component: ChangeLogView,
            name: 'changeLog',
            children: []
          },
          {
            path: 'accessLog',
            component: null,
            name: 'accessLog',
            children: []
          }
        ]
      }
    ]
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignInView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((from) => {
  const authorization = localStorage.getItem('Authorization')
  if (authorization) {
    return from.name === 'signIn' ? { name: 'home' } : true
  } else {
    return from.name === 'signIn' ? true : { name: 'signIn' }
  }
})

export default router
