import { Bell, Briefcase } from 'react-feather'

export default [
  {
    id: 'company',
    title: 'Company',
    icon: <Briefcase size={12} />,
    navLink: '/apps/company/list'
  },
  {
    id: 'brand',
    title: 'Brand',
    icon: <Bell size={12} />,
    navLink: '/apps/brand/list'
  }
]
