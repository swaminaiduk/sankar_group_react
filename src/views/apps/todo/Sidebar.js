// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'
import { Mail, Star, Check, Trash, Plus } from 'react-feather'

const TodoSidebar = props => {
  // ** Props
  const { handleTaskSidebar, setMainSidebar, mainSidebar, dispatch, getTasks, params } = props

  // ** Functions To Handle List Item Filter
  const handleFilter = filter => {
    dispatch(getTasks({ ...params, filter }))
  }

  const handleTag = tag => {
    dispatch(getTasks({ ...params, tag }))
  }

  // ** Functions To Active List Item
  const handleActiveItem = value => {
    // dispatch(getTasks(value))
    if ((params.filter && params.filter === value) || (params.tag && params.tag === value)) {
      return true
    } else {
      return false
    }
  }

  // ** Functions To Handle Add Task Click
  const handleAddClick = () => {
    handleTaskSidebar()
    setMainSidebar()
  }
  return (
    <div
      className={classnames('sidebar-left', {
        show: mainSidebar === true
      })}
    >
      <div className='sidebar'>
        <div className='sidebar-content todo-sidebar'>
          <div className='todo-app-menu'>
            <div className='add-task'>
              <Button.Ripple color='primary' onClick={handleAddClick} block>
                Add Task
              </Button.Ripple>
            </div>
            <PerfectScrollbar className='sidebar-menu-list' options={{ wheelPropagation: false }}>
              <ListGroup tag='div' className='list-group-filters'>
                <ListGroupItem
                  action
                  tag={Link}
                  to={'/apps/todo/'}
                  active={params.filter === '' && params.tag === ''}
                  onClick={() => handleFilter('')}
                >
                  <Mail className='mr-75' size={18} />
                  <span className='align-middle'>My Tasks</span>
                </ListGroupItem>
                {/* <ListGroupItem
                  tag={Link}
                  to={'/apps/todo/important'}
                  active={handleActiveItem('important')}
                  onClick={() => handleFilter('important')}
                  action
                >
                  <Star className='mr-75' size={18} />
                  <span className='align-middle'>Important</span>
                </ListGroupItem> */}
                <ListGroupItem
                  tag={Link}
                  to={'/apps/todo/completed'}
                  active={handleActiveItem('completed')}
                  // onClick={() => handleFilter('completed')}
                  onClick={() => dispatch(getTasks('completed'))}
                  action
                >
                  <Check className='mr-75' size={18} />
                  <span className='align-middle'>Completed</span>
                </ListGroupItem>
              </ListGroup>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoSidebar
