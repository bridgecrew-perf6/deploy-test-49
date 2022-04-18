import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/mine-sweeper',
    component: lazy(() => import('../../views/MineSweeper/MineSweeper'))
  },
]

export { DefaultRoute, TemplateTitle, Routes }
