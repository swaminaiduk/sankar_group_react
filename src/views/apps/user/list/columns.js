import { Badge } from 'reactstrap'
import { Slack, User, Settings, Database, Edit } from 'react-feather'
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
    name: 'S NO',
    selector: 'sno',
    sortable: true,
    cell: row =>  row?.sno
  },
  {
    name: 'User',
    selector: 'name',
    sortable: true,
    cell: row =>  row?.name
  },
  {
    name: 'Company',
    selector: 'company',
    sortable: true,
    cell: row => row?.company1
  },
  {
    name: 'Brand',
    selector: 'brand',
    sortable: true,
    cell: row => row?.brand1
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    cell: row => row.email
  },
  {
    name: 'Role',
    selector: 'role',
    sortable: true,
    cell: row => renderRole(row)
  },
  {
    name: 'Mobile',
    selector: 'currentPlan',
    sortable: true,
    cell: row => row.mobile
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    cell: row => (
      <Badge className='text-capitalize' color={statusObj[row.status]} pill>
        {row.status === true ? 'Active' : 'De active' }
      </Badge>
    )
  },
  {
    name: 'Designation',
    selector: 'designation',
    sortable: true,
    cell: row => row.designation
  },
  {
    name: 'Actions',
    sortable: true,
    cell: row => row.actions
  }
]