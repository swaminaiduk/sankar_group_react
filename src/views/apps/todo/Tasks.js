import { Link } from 'react-router-dom'
import Avatar from '@components/avatar'
import blankAvatar from '@src/assets/images/avatars/avatar-blank.png'
import classnames from 'classnames'
import { ReactSortable } from 'react-sortablejs'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Menu, Search, MoreVertical } from 'react-feather'
import {
  Input,
  Badge,
  InputGroup,
  InputGroupText,
  InputGroupAddon
} from 'reactstrap'
const Tasks = props => {
  const {
    query,
    tasks,
    params,
    setSort,
    dispatch,
    getTasks,
    setQuery,
    updateTask,
    selectTask,
    reOrderTasks,
    handleTaskSidebar,
    handleCommentSidebar,
    handleMainSidebar,
    getComment
  } = props

  const handleTaskClick = obj => {
    dispatch(selectTask(obj))
    handleTaskSidebar()
  } 
  const resolveAvatarVariant = tags => {
    if (tags.includes('high')) return 'light-primary'
    if (tags.includes('medium')) return 'light-warning'
    if (tags.includes('low')) return 'light-success'
    return 'light-primary'
  }

  // ** Renders task tags
  const renderTags = arr => {
    const badgeColor = {
      team: 'light-primary',
      low: 'light-success',
      medium: 'light-warning',
      high: 'light-danger',
      update: 'light-info'
    }

    return arr.map(item => (
      <Badge className='text-capitalize' key={item} color={badgeColor[item]} pill>
        {item}
      </Badge>
    ))
  }

  const renderAvatar = obj => {
    const item = obj.assignee
    if (item.avatar === undefined || item.avatar === null) {
      return <Avatar img={blankAvatar} imgHeight='32' imgWidth='32' />
    } else if (item.avatar !== '') {
      return <Avatar img={item.avatar} imgHeight='32' imgWidth='32' />
    } else {
      return <Avatar color={resolveAvatarVariant(obj.tags)} content={item.fullName} initials />
    }
  }
  const handleCommentClick = (obj) => {
    dispatch(selectTask(obj))
    dispatch(getComment(obj.id))
    handleCommentSidebar()
  }
  const renderTasks = () => {
    return (
      <PerfectScrollbar className='list-group todo-task-list-wrapper' options={{ wheelPropagation: false }}>
        {tasks.length ? (
          <ReactSortable
            tag='ul'
            list={tasks}
            handle='.drag-icon'
            className='todo-task-list media-list'
            setList={newState => dispatch(reOrderTasks(newState))}
          >
            {tasks.map(item => {
              return (
                <li
                  key={item.id}
                  // onClick={() => handleTaskClick(item)}
                  onClick={() =>  handleCommentClick(item) }
                  className={classnames('todo-item', {
                    completed: item.isCompleted
                  })}
                >
                  <div className='todo-title-wrapper'>
                    <div className='todo-title-area'>
                      <MoreVertical className='drag-icon' />
                      <span className='todo-title'>{item.title}</span>
                    </div>
                    <div className='todo-item-action mt-lg-0 mt-50'>
                      {item.tags.length ? <div className='badge-wrapper mr-1'>{renderTags(item.tags)}</div> : null}
                      {item.dueDate ? (
                        <small className='text-nowrap text-muted mr-1'>
                          {new Date(item.dueDate).toLocaleString('default', { month: 'short' })}{' '}
                          {new Date(item.dueDate).getDate().toString().padStart(2, '0')}
                        </small>
                      ) : null}
                      {item.assignee ? renderAvatar(item) : null}
                    </div>
                  </div>
                </li>
              )
            })}
          </ReactSortable>
        ) : (
          <div className='no-results show'>
            <h5>No Items Found</h5>
          </div>
        )}
      </PerfectScrollbar>
    )
  }

  // ** Function to getTasks based on search query
  const handleFilter = e => {
    setQuery(e.target.value)
    dispatch(getTasks(params))
  }

  // ** Function to getTasks based on sort
  const handleSort = (e, val) => {
    e.preventDefault()
    setSort(val)
    dispatch(getTasks({ ...params }))
  }

  return (
    <div className='todo-app-list'>
      <div className='app-fixed-search d-flex align-items-center'>
        <div className='sidebar-toggle cursor-pointer d-block d-lg-none ml-1' onClick={handleMainSidebar}>
          <Menu size={21} />
        </div>
        <div className='d-flex align-content-center justify-content-between w-100'>
          <InputGroup className='input-group-merge'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Search className='text-muted' size={14} />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder='Search task' value={query} onChange={handleFilter} />
          </InputGroup>
        </div>
      </div>
      {renderTasks()}
    </div>
  )
}

export default Tasks
