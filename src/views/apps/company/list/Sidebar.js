// ** Custom Components
import Sidebar from '@components/sidebar'
import { useDispatch } from 'react-redux'
// ** Third Party Components
import { Button, FormGroup, Label  } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import { postCompany } from '../store/action'
const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** Function to handle form submit
  const dispatch = useDispatch()
  const onSubmit = (e, errors) => {
    if (!e.length) {
      const {company, city, branch } = e.target.elements
      dispatch(postCompany({company: company.value, city: city.value, branch: branch.value }))
      // toggleSidebar()
    }
    e.preventDefault()
  }

  return (
    <Sidebar
      size='sm'
      open={open}
      title='Company details'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <AvForm onSubmit={onSubmit}>
        <FormGroup>
          <Label for='company_name'>Company Name</Label>
          <AvInput name='company' id='company_name' placeholder='Company Name'  required />
        </FormGroup>
        <FormGroup>
          <Label for='city'>City</Label>
          <AvInput name='city' id='city' placeholder='city'  required />
        </FormGroup>
        <FormGroup>
          <Label for='branch'>Branch</Label>
          <AvInput name='branch' id='branch' placeholder='branch'  required />
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
