import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/views/dashboard/dashboard'
import Documents from '@/components/views/documents/documents'
import Settings from '@/components/views/settings/settings'
import Users from '@/components/views/users/users'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/documents',
      name: 'Documents',
      component: Documents
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ]
})
