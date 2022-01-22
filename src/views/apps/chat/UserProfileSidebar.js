import { useState } from 'react'
import classnames from 'classnames'
import { X, Star, Trash } from 'react-feather'
import Select, { components } from 'react-select'
import { Modal, ModalBody, Button, Form, FormGroup, Input, Label, Media } from 'reactstrap'
import { isObjEmpty, selectThemeColors } from '@utils'
import { useSkin } from '@hooks/useSkin'
import '@styles/react/libs/editor/editor.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { getCompanyBrandEmployees, create } from './store/actions'
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

const UserProfileSidebar = props => {
  // ** State
  const [skin, setSkin] = useSkin()

  // ** Props
  const { companyBrandStaff, brandOptions, companyList, open, handleTaskSidebar, store, dispatch, updateTask, selectTask, addTask, deleteTask } = props
  const [title, setTitle] = useState(''),
    [assignee, setAssignee] = useState({ value: 'pheobe', label: 'Pheobe Buffay' }),
    [tags, setTags] = useState([]),
    [desc, setDesc] = useState('<p></p>'),
    [completed, setCompleted] = useState(false),
    [important, setImportant] = useState(false),
    [deleted, setDeleted] = useState(false),
    [dueDate, setDueDate] = useState(new Date())
  // ** Custom Assignee Component
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
      setAssignee([
        {
          value: selectedTask.assignee.fullName,
          label: selectedTask.assignee.fullName,
          img: selectedTask.assignee.avatar
        }
      ])
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
    setDesc('')
    setTitle('')
    setAssignee('')
    setCompleted(false)
    setImportant(false)
    setDueDate(new Date())
    dispatch(selectTask({}))
  }

  const [currentCompany, setCurrentCompany] =   useState({ value: '', label: 'Select Company' })
  const [currentBrand, setCurrentBrand] =   useState({ value: '', label: 'Select Brand' })
  const getEmployeeData = (brand) => {
    // if (currentCompany.value !== '' && currentBrand.value !== '') {
      dispatch(getCompanyBrandEmployees({company:currentCompany.value, brand:currentBrand.value}))
    // }
  }
  const onSubmit = (event, errors) => {
    event.preventDefault()
    // if (!errors.length) {
      handleSidebarClosed()
    // } 
    const data = {}
    data.company =  currentCompany.value
    data.brand =  currentBrand.value
    data.group = event.target.group.value
    data.assignee = assignee
    dispatch(create(data))
  }
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
      <Form id='form-modal-todo' className='todo-modal' onSubmit={onSubmit}>
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
            <Label className='form-label' for='due-date'>Group Name</Label>
            <Input type='text' name='group' id='group'   required/>
          </FormGroup>
          <FormGroup>
            <Label className='form-label' for='task-title'>Company</Label>
            <Select 
                name="company"
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={companyList}
                value={currentCompany}
                onChange={data => {
                  setCurrentCompany(data)
                  getEmployeeData(data)
                }}
              />
          </FormGroup>
          <FormGroup>
            <Label className='form-label' for='task-title'>Brand</Label>
            <Select 
                name="brand"
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={brandOptions}
                value={currentBrand}
                onChange={data => {
                  setCurrentBrand(data)
                  getEmployeeData(data)
                }}
              />
          </FormGroup>
          <FormGroup>
            <Label className='form-label' for='task-assignee'>
              Assignee Employee
            </Label>
            <Select
              isMulti
              id='task-assignee'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={companyBrandStaff}
              theme={selectThemeColors}
              value={assignee}
              onChange={data => setAssignee(data)}
              components={{ Option: AssigneeComponent }}
            />
          </FormGroup>
          <Button type='submit' className='mr-1' color='primary' >
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onChange={handleSidebarOpened} >
          Cancel
        </Button>
        </ModalBody>
      </Form>
    </Modal>
  )
}

export default UserProfileSidebar
