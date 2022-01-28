// ** Custom Components
import Sidebar from '@components/sidebar'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Button, FormGroup, Label, InputGroupAddon, InputGroupText  } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import { Image } from 'react-feather'
import { create } from '../store/action'
import { Editor } from '@tinymce/tinymce-react'
import '@styles/react/libs/editor/editor.scss'
const SidebarNewUsers = ({ open, toggleSidebar }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('<p></p>')
  const [file, setFile] = useState([])

  const onSubmit = (event) => {
      const userData = JSON.parse(localStorage.getItem('userData'))[0]
      const formData = new FormData()
      formData.append('image', e.target.files)
      formData.append('title', title)
      formData.append('description', desc)
      formData.append('user_id', userData.id)
      dispatch(create(formData))
      event.preventDefault()
  }

  const changeHandler = (event) => {
    event.preventDefault()
    const userData = JSON.parse(localStorage.getItem('userData'))[0]
      const formData = new FormData()
      formData.append('image', event.target.files[0])
      formData.append('title', title)
      formData.append('description', desc)
      formData.append('user_id', userData.id)
      dispatch(create(formData))
      toggleSidebar()
  }
  return (
    <Sidebar
      size='sm'
      open={open}
      title='Upload Files & Media'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <AvForm onSubmit={e => onSubmit(e)}>
        <FormGroup>
          <Label for='title'>Title</Label>
          <AvInput name='title' id='title' placeholder='Title' value={title} onBlur={(e) => setTitle(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label for='description'>Description</Label>
            <Editor
            apiKey='emjshh1tafcjgizkmk6eofcmmcxc2cmugajs9l2ordjyca64'
            value={desc}
            onEditorChange={content => setDesc(content)}
            init={{
                menubar: false,
                toolbar: 'bold italic underline aligncenter link attachment link',
                toolbar_location: 'bottom'
            }}
            />
        </FormGroup>
        <FormGroup>
          <Label for='branch'>Media</Label>
          {/* <AvInput type="file"  name='files' /> */}

          <InputGroupAddon addonType='append'>
            <InputGroupText>
               <Label className='attachment-icon mb-0' for='attach-doc'>
                 <Image className='cursor-pointer text-secondary p-0' size={22} />
                 <input type='file' id='attach-doc' hidden multiple  onChange={event => changeHandler(event)}  />
               </Label>
            </InputGroupText>
            </InputGroupAddon>
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
