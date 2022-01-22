import { Sliders, MessageSquare, Image, Shuffle,   Users } from 'react-feather'

export default [ 
  {
    id: 'staff',
    title: 'Staff',
    icon: <Users size={12} />,
    navLink: '/apps/user/list'
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: <MessageSquare size={20} />,
    // icon: <Shuffle size={20} />,
    navLink: '/apps/chat'
  },  
  {
    id: 'tasks',
    title: 'Tasks',
    icon: <Sliders size={12} />,
    navLink: '/apps/todo'
  },

  {
    id: 'email',
    title: 'Files & Media',
    icon: <Image size={20} />,
    navLink: '/apps/email'
  }
]
