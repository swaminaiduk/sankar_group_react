import { Settings, Power, User } from 'react-feather'
export default [
  {
    header: 'User Info'
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: <Settings size={20} />,
    children: [
      {
        id: 'accountSettings',
        title: 'Profile',
        icon: <User size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/account-settings'
      },
      {
        id: 'signout',
        title: 'Singn off',
        icon: <Power size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/logout'
      }  
    ]
  }
]
