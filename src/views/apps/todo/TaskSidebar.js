import { useState, Fragment } from 'react'
import classnames from 'classnames'
import Flatpickr from 'react-flatpickr'
import { X, Star, Trash } from 'react-feather'
import { Editor } from '@tinymce/tinymce-react'
import Select, { components }  from 'react-select'
import { Modal, ModalBody, Button, Form, FormGroup, Input, Label, Media } from 'reactstrap'
import { isObjEmpty, selectThemeColors } from '@utils'
import { useSkin } from '@hooks/useSkin'
import '@styles/react/libs/editor/editor.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { getGroupEmployees } from './store/actions'

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)
const ModalHeader = props => {
  const {
    children,
    store,
    handleTaskSidebar,
    setDeleted,
    deleted,
    important,
    setImportant,
    deleteTask,
    dispatch
  } = props
  // ** Function to delete task
  const handleDeleteTask = () => {
    setDeleted(!deleted)
    dispatch(deleteTask(store.selectedTask.id))
    handleTaskSidebar()
  } 
  return (
    <div className='modal-header d-flex align-items-center justify-content-between mb-1'>
      <h5 className='modal-title'>{children}</h5>
      <div className='todo-item-action d-flex align-items-center'>
        {store && !isObjEmpty(store.selectedTask) ? (
          <Trash className='cursor-pointer mt-25' size={16} onClick={() => handleDeleteTask()} />
        ) : null}
        <span className='todo-item-favorite cursor-pointer mx-75'>
          <Star
            size={16}
            onClick={() => setImportant(!important)}
            className={classnames({
              'text-warning': important === true
            })}
          />
        </span>
        <X className='font-weight-normal mt-25' size={16} onClick={handleTaskSidebar} />
      </div>
    </div>
  )
}

  const TaskSidebar = props => {
  const [skin, setSkin] = useSkin()
  const { open, handleTaskSidebar, store, dispatch, updateTask, selectTask, addTask, deleteTask } = props
  const [title, setTitle] = useState(''),
    [group, setGroup] = useState([]),
    [assignee, setAssignee] = useState(),
    [tags, setTags] = useState([]),
    [desc, setDesc] = useState('<p></p>'),
    [completed, setCompleted] = useState(false),
    [important, setImportant] = useState(false),
    [deleted, setDeleted] = useState(false),
    [dueDate, setDueDate] = useState(new Date())
 
  const tagOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' }
  ]

  // ** Returns sidebar title
  const handleSidebarTitle = () => {
    if (store && !isObjEmpty(store.selectedTask)) {
      return (
        <Button.Ripple
          outline
          size='sm'
          onClick={() => setCompleted(!completed)}
          color={completed === true ? 'success' : 'secondary'}
        >
          {completed === true ? 'Completed' : 'Mark Complete'}
        </Button.Ripple>
      )
    } else {
      return 'Add Task'
    }
  }

  // ** Function to run when sidebar opens
  const handleSidebarOpened = () => {
    const { selectedTask } = store

    if (!isObjEmpty(selectedTask)) {
      setTitle(selectedTask.title)
      setCompleted(selectedTask.isCompleted)
      setImportant(selectedTask.isImportant)
      // setAssignee([
      //   {
      //     value: selectedTask.assignee.fullName,
      //     label: selectedTask.assignee.fullName
      //   }
      // ])
      setDueDate(selectedTask.dueDate)
      setDesc(selectedTask.description)

      if (selectedTask.tags.length) {
        const tags = []
        selectedTask.tags.map(tag => {
          tags.push({ value: tag, label: capitalize(tag) })
        })
        setTags(tags)
      }
    }
  }

  // ** Function to run when sidebar closes
  const handleSidebarClosed = () => {
    setTags([])
    setGroup([])
    setDesc('')
    setTitle('')
    setAssignee()
    setCompleted(false)
    setImportant(false)
    setDueDate(new Date())
    dispatch(selectTask({}))
  }

  // ** Function to reset fileds
  const handleResetFields = () => {
    setTitle(store.selectedTask.title)
    setDesc(store.selectedTask.description)
    setCompleted(store.selectedTask.isCompleted)
    setImportant(store.selectedTask.isImportant)
    setDeleted(store.selectedTask.isDeleted)
    setDueDate(store.selectedTask.dueDate)
    if (store.selectedTask.assignee.fullName !== assignee.label) {
      // setAssignee({
      //   value: store.selectedTask.assignee.fullName,
      //   label: store.selectedTask.assignee.fullName
      // })
    }
    if (store.selectedTask.tags.length) {
      const tags = []
      store.selectedTask.tags.map(tag => {
        tags.push({ value: tag, label: capitalize(tag) })
      })
      setTags(tags)
    }
  }
  // ** Renders Footer Buttons
  const renderFooterButtons = () => {
    const newTaskTag = []
    const newAssignee = []
    const doesInclude = '' //!isObjEmpty(store.selectedTask) && assignee.label === store.selectedTask.assignee.fullName
    if (tags.length) {
      tags.map(tag => newTaskTag.push(tag.value))
    }
    if (assignee?.length) {
      assignee.map(assignee => newAssignee.push(assignee.value))
    }
    const user = JSON.parse(localStorage.getItem('userData'))[0]
    const state = {
      group: group ? group.id : '',
      title,
      dueDate,
      tags: newTaskTag,
      description: desc,
      isCompleted: completed,
      isDeleted: deleted,
      isImportant: important,
      assignee: newAssignee,
      employee_id: user.id
    }
    if (store && !isObjEmpty(store.selectedTask)) {
      return (
        <Fragment>
          <Button
            color='primary'
            disabled={!title.length}
            className='update-btn update-todo-item mr-1'
            onClick={() => {
              dispatch(updateTask({ ...state, id: store.selectedTask.id }))
              handleTaskSidebar()
            }}
          >
            Update
          </Button>
          <Button color='secondary' onClick={handleResetFields} outline>
            Reset
          </Button>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Button
            color='primary'
            disabled={!title.length}
            className='add-todo-item mr-1'
            onClick={() => {
              dispatch(addTask(state))
              handleTaskSidebar()
            }}
          >
            Add Task
          </Button>
          <Button color='secondary' onClick={handleTaskSidebar} outline>
            Cancel
          </Button>
        </Fragment>
      )
    }
  } 
  const selectGroup = (data) => {
    setGroup(data)
    dispatch(getGroupEmployees(data))
  } 
  const AssigneeComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <Media className='align-items-center'>
          <Media body>
            <p className='mb-0'>{data.label}</p>
          </Media>
        </Media>
      </components.Option>
    )
  }
  const selectedGroupEmp = []
  store?.task_group_employees?.map((emp) => {
    if (emp.assigned) {
      selectedGroupEmp.push(emp)
    }
  }) 
  return (
    <Modal
      isOpen={open}
      toggle={handleTaskSidebar}
      className='sidebar-lg'
      contentClassName='p-0'
      onOpened={handleSidebarOpened}
      onClosed={handleSidebarClosed}
      modalClassName='modal-slide-in sidebar-todo-modal'
    >
      <Form id='form-modal-todo' className='todo-modal' onSubmit={(e) => e.preventDefault()}>
        <ModalHeader
          store={store}
          deleted={deleted}
          dispatch={dispatch}
          important={important}
          deleteTask={deleteTask}
          setDeleted={setDeleted}
          setImportant={setImportant}
          handleTaskSidebar={handleTaskSidebar}
        >
          {handleSidebarTitle()}
        </ModalHeader>
        <ModalBody className='flex-grow-1 pb-sm-0 pb-3'>
          <FormGroup>
            <Label className='form-label' for='task-title'>
              Title
            </Label>
            <Input
              id='task-title'
              value={title}
              placeholder='Title'
              className='new-todo-item-title'
              onChange={e => setTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label className='form-label' for='task-assignee'>
              Group
            </Label>
            <Select
              id='task-assignee'
              className='react-select'
              classNamePrefix='select'
              isClearable={true}
              name='group'
              options={store?.task_groups}
              theme={selectThemeColors}
              value={group}
              onChange={data => selectGroup(data)}
            />
          </FormGroup>
          <FormGroup>
            <Label className='form-label' for='task-tags'>
              Assign
            </Label>
            <Select
              isMulti
              id='task-tags'
              className='react-select'
              classNamePrefix='select'
              isClearable={true}
              options={selectedGroupEmp}
              theme={selectThemeColors}
              value={assignee}
              onChange={data => {
                setAssignee(data)
                setAssignee(data !== null ? [...data] : [])
              }}
              components={{ Option: AssigneeComponent }}
            />
          </FormGroup>
          <FormGroup>
            <Label className='form-label' for='due-date'>
              Due Date
            </Label>
            <Flatpickr
              id='due-date'
              name='due-date'
              className='form-control'
              onChange={date => setDueDate(date[0])}
              value={dueDate}
              options={{ dateFormat: 'Y-m-d' }}
            />
          </FormGroup>
          <FormGroup>
            <Label className='form-label' for='task-tags'>
              Status
            </Label>
            <Select
              isMulti
              id='task-tags'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={tagOptions}
              theme={selectThemeColors}
              value={tags}
              onChange={data => {
                setTags(data !== null ? [...data] : [])
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for='task-desc' className='form-label'>
              Description
            </Label>
            <Editor
              apiKey='emjshh1tafcjgizkmk6eofcmmcxc2cmugajs9l2ordjyca64'
              value={desc}
              onEditorChange={content => setDesc(content)}
              init={{
                menubar: false,
                toolbar: 'bold italic underline aligncenter link',
                toolbar_location: 'bottom',
                skin: skin === 'dark' ? 'dark' : undefined,
                content_css: skin === 'dark' ? 'dark' : undefined
              }}
            />
          </FormGroup>
          <FormGroup className='my-1'>{renderFooterButtons()}</FormGroup>
        </ModalBody>
      </Form>
    </Modal>
  )
}

export default TaskSidebar