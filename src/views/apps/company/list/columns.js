import Avatar from '@components/avatar'

import { Badge } from 'reactstrap'
import { Slack, User, Settings, Database, Edit } from 'react-feather'

// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.fullName || 'John Doe'} initials />
  }
}

// ** Renders Role Columns
const renderRole = row => {
  const roleObj = {
    subscriber: {
      class: 'text-primary',
      icon: User
    },
    maintainer: {
      class: 'text-success',
      icon: Database
    },
    editor: {
      class: 'text-info',
      icon: Edit
    },
    author: {
      class: 'text-warning',
      icon: Settings
    },
    admin: {
      class: 'text-danger',
      icon: Slack
    }
  }

  const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit

  return (
    <span className='text-truncate text-capitalize align-middle'>
      <Icon size={18} className={`${roleObj[row.role] ? roleObj[row.role].class : ''} mr-50`} />
      {row.role}
    </span>
  )
}

const statusObj = {
  pending: 'light-warning',
  active: 'light-success',
  inactive: 'light-secondary'
}

export const columns = [
  {
    name: 'S No',
    selector: 'sno',
    sortable: true,
    cell: row => row.sno 
  },
  {
    name: 'Company',
    selector: 'company',
    sortable: true,
    cell: row => row.company     
  },
  {
    name: 'Branch',
    selector: 'branch',
    sortable: true,
    cell: row => row.branch
  },
  {
    name: 'City',
    selector: 'city',
    sortable: true,
    cell: row => row.city
  },
  {
    name: 'Status',
    minWidth: '138px',
    selector: 'status',
    sortable: true,
    cell: row => (
      <Badge className='text-capitalize' color={statusObj[row.status]} pill>
        {row.status === true ? 'Active' : 'No'}
      </Badge>
    )
  },
  {
    name: 'Actions',
    selector: 'fullName',
    sortable: true,
    cell: row => row.actions
  }
]
