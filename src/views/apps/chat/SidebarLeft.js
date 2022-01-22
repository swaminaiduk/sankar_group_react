import { useState } from 'react'
import Avatar from '@components/avatar'
import { useDispatch } from 'react-redux'
import { selectChat } from './store/actions'
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { X, PlusCircle } from 'react-feather'

import {
  Card,
  InputGroup 
} from 'reactstrap'
const SidebarLeft = props => {
  const { setMainSidebar, store, sidebar, handleSidebar, userSidebarLeft, handleUserSidebarLeft, handleTaskSidebar } = props
  const {userProfile, getGroups } = store
  const dispatch = useDispatch()
  const [active, setActive] = useState({})
  const handleUserClick = (type, id) => {
    dispatch(selectChat(id))
    setActive({ type, id })
    if (sidebar === true) {
      handleSidebar()
    }
  }
  const renderChats = () => {
    return getGroups.map(item => {
      return (
        <li
          className={classnames({
            active: active.type === 'chat' && active.id === item.id
          })}
          key={item.id}
          onClick={() => handleUserClick('chat', item.id)}
        >
          <div className='chat-info flex-grow-1'>
            <h5 className='mb-0'>{item.group} </h5>
          </div>
        </li>
      )
    })
  }
  const handleAddClick = () => {
    setMainSidebar()
  }
  return store ? (
    <div className='sidebar-left'>
      <div className='sidebar'>
        <div
          className={classnames('chat-profile-sidebar', {
            show: userSidebarLeft
          })}
        > 
        </div>
        <Card
          className={classnames('sidebar-content', {
            show: sidebar === true
          })}
        >
          <div className='sidebar-close-icon' onClick={handleSidebar}>
            <X size={14} />
          </div>
          <div className='chat-fixed-search'>
            <div className='d-flex align-items-center w-100'>
              <div className='sidebar-profile-toggle' onClick={handleUserSidebarLeft}>
                {Object.keys(userProfile).length ? (
                  <Avatar
                    className='avatar-border'
                    img={userProfile.avatar}
                    status={status}
                    imgHeight='42'
                    imgWidth='42'
                  />
                ) : null}
              </div>
              <InputGroup className='input-group-merge ml-1 w-100'>
                <PlusCircle   onClick={handleTaskSidebar}/>
              </InputGroup>
            </div>
          </div>
          <PerfectScrollbar className='chat-user-list-wrapper list-group' options={{ wheelPropagation: false }}>
            <h4 className='chat-list-title'>Group Chats</h4>
            <ul className='chat-users-list chat-list media-list'>{renderChats()}</ul>
          </PerfectScrollbar>
        </Card>
      </div>
    </div>
    
  ) : null
}

export default SidebarLeft
