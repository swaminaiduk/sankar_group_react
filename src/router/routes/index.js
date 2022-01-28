// ** Routes Imports
import AppRoutes from './Apps'
import FormRoutes from './Forms'
import PagesRoutes from './Pages'
import BrandRoutes from './Brand'
import ChartMapsRoutes from './ChartsMaps'
import DashboardRoutes from './Dashboards'
import UiElementRoutes from './UiElements'
import MediaRoutes from './Media'
import PageLayoutsRoutes from './PageLayouts'

// ** Document title
const TemplateTitle = '%s - Sankar Groups'

// ** Default Route
const DefaultRoute = '/dashboard/analytics'

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,
  ...AppRoutes,
  ...PagesRoutes,
  ...MediaRoutes,
  ...UiElementRoutes,
  ...PageLayoutsRoutes,
  ...FormRoutes,
  ...BrandRoutes,
  ...ChartMapsRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
