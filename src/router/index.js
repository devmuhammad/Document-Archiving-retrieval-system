import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard/dashboard'
import Documents from '@/components/documents/documents'
import Archive from '@/components/archive/archive'
import Settings from '@/components/settings/settings'
import Accounts from '@/components/userAccounts/account'

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
      path:"/documents",
      name:"Documents",
      component: Documents
    },
    {
      path:"/archive",
      name:"archievedDocuments",
      component:Archive
    },
    {
      path:"/settings",
      name:"Settings",
      component: Settings
    },
    {
      path:"/useraccount",
      name:"userAccounts",
      component:Accounts
    }
  ]
})
