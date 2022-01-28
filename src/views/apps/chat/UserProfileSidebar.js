import { X, Users, Trash, Plus } from 'react-feather'
import { Modal, ModalBody, Form } from 'reactstrap'
import '@styles/react/libs/editor/editor.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { removeGroupStaff, addStaffGroup } from './store/actions'
import { useEffect } from 'react'
const ModalHeader = props => {
  const {
    handleProfile,
    children
  } = props
  return (
    <div className='modal-header d-flex align-items-center justify-content-between mb-1'>
      <h5 className='modal-title'>{children}</h5>
      <div className='todo-item-action d-flex align-items-center'>
        <X className='font-weight-normal mt-25' size={16}  onClick={handleProfile}/>
      </div>
    </div>
  )
}
const UserProfileSidebar = props => {
  const {isOpen, groupStaff, handleProfile, dispatch, store} = props
  const selectedGroup = store?.selectedGroup
  const renderStaff = (groupId, staff) => {
    return staff?.map((item) => {
      if (item.assigned) {
        return (
            <li className='p-1 style-none' > {item.label} 
            <Trash className='text-danger pr-0' onClick={() => { dispatch(removeGroupStaff(selectedGroup, item.value)) }} /> </li>
        ) 
      }
    })
  }
  const renderNewStaff = (groupId, staff) => {
    return staff?.map((item) => {
      if (!item?.assigned) {
        return (
            <li className='p-1 style-none' > {item.label} 
            <Plus className='text-danger pr-0' onClick={() => { dispatch(addStaffGroup({selectedGroup, item})) }} /> </li>
        ) 
      }
    })
  } 

  return (
    <Modal
      isOpen={isOpen}
      className='sidebar-lg'
      contentClassName='p-0'
      modalClassName='modal-slide-in sidebar-todo-modal'
    >
      <Form id='form-modal-todo' className='todo-modal' >
        <ModalHeader handleProfile={handleProfile}>
          <Users/> Group Users
        </ModalHeader>
        <ModalBody className='flex-grow-1 pb-sm-0 pb-3'>
          <ul>{renderStaff(selectedGroup, groupStaff)}</ul>
          <strong>Add New</strong>
          <ul>{renderNewStaff(selectedGroup, groupStaff)}</ul>
        </ModalBody>
      </Form>
    </Modal>
  )
}

export default UserProfileSidebar
