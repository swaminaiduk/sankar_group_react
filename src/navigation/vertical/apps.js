import { Sliders, Image,   Users, User } from 'react-feather'

export default [ 
  {
    id: 'staff',
    title: 'Staff',
    icon: <User size={12} />,
    navLink: '/apps/user/list'
  },
  {
    id: 'chat',
    title: 'Groups',
    icon: <Users size={20} />,
    navLink: '/apps/chat'
  },  
  {
    id: 'tasks',
    title: 'Tasks',
    icon: <Sliders size={12} />,
    navLink: '/apps/todo',
    action: 'read',
    resource: 'ACL'
  },
  {
    id: 'files',
    title: 'Files & Media',
    icon: <Image size={20} />,
    navLink: '/media'
  }
]
