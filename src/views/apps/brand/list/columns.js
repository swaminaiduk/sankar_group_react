import { Badge } from 'reactstrap'
import { Slack, User } from 'react-feather'
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 2),
    states = ['light-success',  'light-secondary'],
    color = states[stateNum]
}
// ** Renders Role Columns
const renderRole = row => {
  const roleObj = {
    brand: {
      class: 'text-primary',
      icon: User
    },
    admin: {
      class: 'text-danger',
      icon: Slack
    }
  }
 
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
    name: 'sno',
    sortable: true,
    cell: row => row.sno
  },
  {
    name: 'brand',
    selector: 'fullName',
    sortable: true,
    cell: row => row.brand
  },
  {
    name: 'createdAt',
    selector: 'email',
    sortable: true,
    cell: row => row.createdAt
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    cell: row => (
      <Badge className='text-capitalize'>
        {(row.status === true) ? 'Yes' : 'No'}
      </Badge>
    )
  },
  {
    name: 'Actions',
    cell: row => row.actions
  }
]