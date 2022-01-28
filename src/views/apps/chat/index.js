import { Fragment, useState, useEffect } from 'react'
import Chat from './Chat'
import Sidebar from './SidebarLeft'
import classnames from 'classnames'

import { useDispatch, useSelector } from 'react-redux'
import {  getGroups, getCompanyList, getBrandOptions, getGroupStaff, selectGroup } from './store/actions'
 
import '@styles/base/pages/app-chat.scss'
import '@styles/base/pages/app-chat-list.scss'
import GroupSidebar from './GroupSidebar'
const AppChat = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.chat)

  const [openGroupSidebar, setOpenGroupSidebar] = useState(false)
  const handleGroupSidebar = () => setOpenGroupSidebar(!openGroupSidebar)
  const [sidebar, setSidebar] = useState(false)
  
  const handleSidebar = () => setSidebar(!sidebar)
  const handleOverlayClick = () => {
    setUserSidebarLeft(false)
  }
  const userData = JSON.parse(localStorage.getItem('userData'))[0]
  useEffect(() => {
    dispatch(getGroups(userData.id))
    dispatch(getCompanyList())
    dispatch(getBrandOptions())
  }, [dispatch]) 
  return (
    <Fragment>
      <Sidebar
        store={store}
        sidebar={sidebar}
        handleSidebar={handleSidebar}
        handleTaskSidebar={handleGroupSidebar}
        userData={userData}
      />
      <div className='content-right'>
        <div className='content-wrapper'>
          <div className='content-body'>
            <div  onClick={handleOverlayClick} ></div>
            <Chat
              store={store}
              handleSidebar={handleSidebar}
              getGroupStaff={getGroupStaff}
              selectedGroup={store?.selectGroup}
            />
            <GroupSidebar
              open={openGroupSidebar}
              handleTaskSidebar={handleGroupSidebar}
              companyList = {store?.companyList}
              brandOptions = {store?.brandOptions}
              companyBrandStaff = {store?.companyBrandStaff}
              store={store}   
              userData={userData}           
              dispatch={dispatch}
            />  
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AppChat
