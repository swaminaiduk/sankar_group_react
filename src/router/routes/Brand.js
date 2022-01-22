import { lazy } from 'react'

const TablesRoutes = [
  {
    path: '/apps/company/list',
    component: lazy(() => import('../../views/apps/company/list'))
  },
  {
    path: '/apps/brand/list',
    component: lazy(() => import('../../views/apps/brand/list'))
  }
]

export default TablesRoutes
