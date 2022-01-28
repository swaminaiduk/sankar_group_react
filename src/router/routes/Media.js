import { lazy } from 'react'

const MediaRoutes = [
  {
    path: '/media',
    component: lazy(() => import('../../views/files/list'))
  } 
]

export default MediaRoutes
