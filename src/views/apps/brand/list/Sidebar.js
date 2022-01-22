// ** Custom Components
import Sidebar from '@components/sidebar'
import { useDispatch } from 'react-redux'
// ** Third Party Components
import { Button, FormGroup, Label  } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import { create } from '../store/action'
const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** Function to handle form submit
  const dispatch = useDispatch()
  const onSubmit = (e, errors) => {
    if (!e.length) {
      const { brand } = e.target.elements
      dispatch(create({brand: brand.value}))
      toggleSidebar()
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
          <Label for='brand'>Brand Name</Label>
          <AvInput name='brand' id='brand' placeholder='brand Name'  required />
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
