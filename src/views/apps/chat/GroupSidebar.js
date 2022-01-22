import { Modal, Form, ModalBody, Button,  FormGroup, Input, Label, Media } from 'reactstrap'
import Select, { components } from 'react-select'
import { useState } from 'react'
import { X, Star } from 'react-feather'
import { isObjEmpty, selectThemeColors } from '@utils'
import { getCompanyBrandEmployees, create } from './store/actions'
const GroupSidebar = props => {
  const { companyBrandStaff, open, handleTaskSidebar,  store, dispatch, companyList, brandOptions} = props
  const [currentCompany, setCurrentCompany] =   useState({ value: '', label: 'Select Company' })
  const [currentBrand, setCurrentBrand] =   useState({ value: '', label: 'Select Brand' })
  const [assignee, setAssignee] = useState({ value: '', label: '' })
  const onSubmit = (event, errors) => {
    event.preventDefault()
    handleTaskSidebar()
    const data = {}
    data.company =  currentCompany.value
    data.brand =  currentBrand.value
    data.group = event.target.group.value
    data.assignee = assignee
    dispatch(create(data))
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

  const getEmployeeData = (brand) => {
    dispatch(getCompanyBrandEmployees({company:currentCompany.value, brand:currentBrand.value}))
  }
  const ModalHeader = props => {
    const {
      children,
      store,
      handleTaskSidebar,
      important,
      setImportant,
      dispatch    
    } = props
    return (
      <div className='modal-header d-flex align-items-center justify-content-between mb-1'>
        <h5 className='modal-title'>{children}</h5>
        <div className='todo-item-action d-flex align-items-center'>
          <X className='font-weight-normal mt-25' size={16} onClick={handleTaskSidebar} />
        </div>
      </div>
    )
  }
  return (
    <Modal
      isOpen={open}
      toggle={handleTaskSidebar}
      className='sidebar-lg'
      contentClassName='p-0'
      modalClassName='modal-slide-in sidebar-todo-modal'
    >
      <Form id='form-modal-todo' className='todo-modal' onSubmit={onSubmit}>
        <ModalHeader
          store={store}
          dispatch={dispatch}
        >
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
        <Button type='reset' color='secondary' outline >
          Cancel
        </Button>
        </ModalBody>
      </Form>
    </Modal>
  )
}

export default GroupSidebar
