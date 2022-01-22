import { Fragment, useState, useEffect } from 'react'
import Chat from './Chat'
import Sidebar from './SidebarLeft'
import classnames from 'classnames'

import { useDispatch, useSelector } from 'react-redux'
import {  getGroups, getCompanyList, getBrandOptions } from './store/actions'

// import { getTasks, updateTask, selectTask, addTask, deleteTask } from './store/actions'

import '@styles/base/pages/app-chat.scss'
import '@styles/base/pages/app-chat-list.scss'
import GroupSidebar from './GroupSidebar'
const AppChat = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.chat)
  const [openTaskSidebar, setOpenTaskSidebar] = useState(false)
  const handleTaskSidebar = () => setOpenTaskSidebar(!openTaskSidebar)
  const [user, setUser] = useState({})
  const [sidebar, setSidebar] = useState(false)
  const [userSidebarRight, setUserSidebarRight] = useState(false)
  const [userSidebarLeft, setUserSidebarLeft] = useState(false)

  // ** Sidebar & overlay toggle functions
  const handleSidebar = () => setSidebar(!sidebar)
  const handleUserSidebarLeft = () => setUserSidebarLeft(!userSidebarLeft)
  const handleUserSidebarRight = () => setUserSidebarRight(!userSidebarRight)

  const handleOverlayClick = () => {
    setUserSidebarLeft(false)
  }
  const handleUser = obj => setUser(obj)
  useEffect(() => {
    dispatch(getGroups())
    dispatch(getCompanyList())
    dispatch(getBrandOptions())
  }, [dispatch]) 
  return (
    <Fragment>
      <Sidebar
        store={store}
        sidebar={sidebar}
        handleSidebar={handleSidebar}
        userSidebarLeft={userSidebarLeft}
        handleTaskSidebar={handleTaskSidebar}
        setMainSidebar={handleUserSidebarLeft}
      />
      <div className='content-right'>
        <div className='content-wrapper'>
          <div className='content-body'>
            <div
              className={classnames('body-content-overlay', {
                show: userSidebarRight === true || sidebar === true || userSidebarLeft === true
              })}
              onClick={handleOverlayClick}
            ></div>
            <Chat
              store={store}
              handleUser={handleUser}
              handleSidebar={handleSidebar}
              userSidebarLeft={userSidebarLeft}
              handleUserSidebarRight={handleUserSidebarRight}
            />
            <GroupSidebar
              open={openTaskSidebar}
              handleTaskSidebar={handleTaskSidebar}
              companyList = {store?.companyList}
              brandOptions = {store?.brandOptions}
              companyBrandStaff = {store?.companyBrandStaff}
              store={store}
              
              dispatch={dispatch}
            /> 
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AppChat
