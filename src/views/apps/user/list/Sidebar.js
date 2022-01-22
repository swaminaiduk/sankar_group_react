import {  useState } from 'react'
import Sidebar from '@components/sidebar'
import { Button, FormGroup, Label} from 'reactstrap'
import Select from 'react-select'
import { AvForm, AvInput, AvCheckbox, AvCheckboxGroup } from 'availity-reactstrap-validation-safe'
import { useDispatch } from 'react-redux'
import { create } from '../store/action'
const setCurrentCompany = []
const currentBrand = []
const SidebarNewUsers = ({ open, toggleSidebar, companyList, roleOptions, brandOptions }) => {
  const dispatch = useDispatch()
  const onSubmit = (event, errors) => {
    if (!errors.length) {
      toggleSidebar()
    } 
    const data = {}
    data.company =  setCurrentCompany
    data.brand =  currentBrand
    data.name = event.target.name.value
    data.email = event.target.email.value
    data.mobile = event.target.mobile.value
    data.designation = event.target.designation.value
    data.role = event.target.role.value
    dispatch(create(data))
    event.preventDefault()
    setCurrentCompany.splice(0, setCurrentCompany.length)
    currentBrand.splice(0, currentBrand.length)
  }
  const [currentRole, setCurrentRole] = useState({ value: '', label: 'Select Role' })
  const handleChange = (e) => {
    const checked = e.target.checked
    const checkedValue = e.target.value
    const checkedName = e.target.name
    if (checked) {
      setCurrentCompany.push(checkedValue)
    } else {
      setCurrentCompany.pop(checkedValue)
    }
  }
  const brandHandleChange = (e) => {
    const checked = e.target.checked
    const checkedValue = e.target.value
    const checkedName = e.target.name
    if (checked === true) {
      currentBrand.push(checkedValue)
    }
  }

  const companyCheckBox = companyList?.map(function(c) {
    return <AvCheckbox label={c?.label} value={c?.value} onChange={(e) => handleChange(e)}  />
  })
  const brandCheckBox = brandOptions?.map(function(b) {
    return <AvCheckbox label={b?.label} value={b?.value}  onChange={(e) => brandHandleChange(e)} />
  })
  return (
    <Sidebar
      size='lg'
      open={open}
      title='New Employee'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <AvForm onSubmit={onSubmit}>
        <FormGroup>
        <Label for='name'>Company</Label>
          <AvCheckboxGroup inline name="company" required>  
            {companyCheckBox}
          </AvCheckboxGroup>
          {/* <Select 
                name="company"
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={companyList}
                value={currentCompany}
                onChange={data => {
                  setCurrentCompany(data)
                }}
              />  */}
        </FormGroup>
        <FormGroup>
          <Label for='name'>Brand</Label>
          <AvCheckboxGroup inline name="brand"  required>  
            {brandCheckBox}
          </AvCheckboxGroup>
        </FormGroup>
        <FormGroup>
          <Label for='name'>Name</Label>
          <AvInput type='text' name='name' id='name'  required/>
        </FormGroup>
        <FormGroup>
          <Label for='email'>Email</Label>
          <AvInput name='email' id='email'  type="email" required />
        </FormGroup>
        <FormGroup>
          <Label for='mobile'>Mobile</Label>
          <AvInput name='mobile' id='mobile' required />
        </FormGroup>
        <FormGroup>
          <Label for='user-role'>User Role</Label>
          <Select
                name="role"
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={roleOptions}
                value={currentRole}
                onChange={data => {
                  setCurrentRole(data)
                }}
              /> 
        </FormGroup>
        <FormGroup>
          <Label for='designation'>Designation</Label>
          <AvInput name='designation' id='designation'   required />
        </FormGroup>
        <Button type='submit' className='mr-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </AvForm>
    </Sidebar>
  )
}

export default SidebarNewUsers
