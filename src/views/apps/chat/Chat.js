// ** React Imports
import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import config from '../../../configs/themeConfig'
 
// ** Store & Actions
import { useDispatch } from 'react-redux'
import { sendMsg, sendFile } from './store/actions'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {  User, Mic, Image, Send, File } from 'react-feather'
import UserProfileSidebar from './UserProfileSidebar'
import {
  CardLink,
  Form,
  Label,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Button
} from 'reactstrap'
const ChatLog = props => {
  const { store,  getGroupStaff, removeGroupStaff } = props
  const { selectedUser, selectedGroup  } = store 
  const chatArea = useRef(null)
  const dispatch = useDispatch()
  const [msg, setMsg] = useState('')
  const [profile, setProfile] = useState(false)
  const scrollToBottom = () => {
    const chatContainer = ReactDOM.findDOMNode(chatArea.current)
    chatContainer.scrollTop = Number.MAX_SAFE_INTEGER
  }
  const handleProfile = () => setProfile(!profile)

  useEffect(() => {
    dispatch(getGroupStaff(selectedGroup?.id))
    const selectedUserLen = Object.keys(selectedUser).length
    if (selectedUserLen) {
      scrollToBottom()
    }
  }, [selectedUser])

  const formattedChatData = () => {
    let chatLog = []
    if (selectedUser.chat) {
      chatLog = selectedUser.chat
    }

    const formattedChatLog = []
    let chatMessageSenderId = chatLog[0] ? chatLog[0].senderId : undefined
    let msgGroup = {
      senderId: chatMessageSenderId,
      messages: []
    }
    chatLog.forEach((msg, index) => {
      if (chatMessageSenderId === msg.senderId) {
        msgGroup.messages.push({
          msg: msg.message,
          file: msg.file,
          time: msg.createdAt
        })
      } else {
        chatMessageSenderId = msg.senderId
        formattedChatLog.push(msgGroup)
        msgGroup = {
          senderId: msg.senderId,
          messages: [
            {
              msg: msg.message,
              file: msg.file,
              time: msg.createdAt
            }
          ]
        }
      }
      if (index === chatLog.length - 1) formattedChatLog.push(msgGroup)
    })
    return formattedChatLog
  }

  const renderChats = () => {
    return formattedChatData().map((item, index) => {
      const user = JSON.parse(localStorage.getItem('userData'))[0]
      const side = (item.senderId === user.id) ? "chat-right" : "chat-left"
      
      return (
        <div
          key={index}
          className={side}
        > 
          <div className='chat-body'>
            {item.messages.map(chat => ( 
              <div key={chat.msg} className='chat-content'>
                <p>{chat.msg}</p>
                {chat.file ? <CardLink  href={`${config.app.serverApi}/images/${chat.file}`} target="_blank" title="View file" >
                  {((chat.file).split('.').pop() === 'jpeg' || (chat.file).split('.').pop() === 'jpg' || (chat.file).split('.').pop() === 'png') ? <img src={`${config.app.serverApi}/images/${chat.file}`} className='w-100'/> : <File size={38}/>}
                </CardLink> : ''}
              </div>
            ))}
          </div>
        </div>
      )
    })
  } 

  // ** Sends New Msg
  const [selectedFile, setSelectedFile] = useState()
  const handleSendMsg = e => {
    e.preventDefault()
    const userData = JSON.parse(localStorage.getItem('userData'))[0]
    if (msg.length) {
      dispatch(sendMsg({ senderId:  userData.id, sender_name: userData.name, group_id: selectedGroup.id, message: msg }, selectedGroup))
      setMsg('')
    }
  } 
  const changeHandler = (event) => {
    event.preventDefault()
    // setSelectedFile(event.target.files[0])
    const userData = JSON.parse(localStorage.getItem('userData'))[0]
    const formData = new FormData()
    formData.append('image', event.target.files[0])
    formData.append('senderId', userData.id)
    formData.append('sender_name', userData.name)
    formData.append('group_id', selectedGroup.id)
    formData.append('msg', msg)
    dispatch(sendFile(formData, selectedGroup))
  }
  const ChatWrapper = Object.keys(selectedUser).length && selectedUser.chat ? PerfectScrollbar : 'div'
  return (
    <div className='chat-app-window'>
        <div className={classnames('active-chat', { 'd-none': selectedUser === null })}>
          <div className='chat-navbar'>
            <header className='chat-header'>
              <div className='d-flex align-items-center'>
                <div className='sidebar-toggle d-block mr-1' >
                  <User size={21} onClick={handleProfile} /> {selectedGroup?.group}
                </div>
              </div>
            </header>
          </div>
          <ChatWrapper ref={chatArea} className='user-chats' options={{ wheelPropagation: false }}>
            {selectedUser.chat ? <div className='chats'>{renderChats()}</div> : null}
          </ChatWrapper>
          <Form className='chat-app-form' onSubmit={e => handleSendMsg(e)}>
            <InputGroup className='input-group-merge mr-1 form-send-message'>
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>
                  <Mic className='cursor-pointer' size={14} />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                value={msg}
                onChange={e => setMsg(e.target.value)}
                placeholder='Type your message or use speech to text'
              />
              <InputGroupAddon addonType='append'>
                <InputGroupText>
                  <Label className='attachment-icon mb-0' for='attach-doc'>
                    <Image className='cursor-pointer text-secondary' size={14} />
                    <input type='file' id='attach-doc' hidden onChange={e => changeHandler(e)}  />
                  </Label>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <Button className='send' color='primary'>
              <Send size={14} className='d-lg-none' />
              <span className='d-none d-lg-block'>Send</span>
            </Button>
          </Form>
          <UserProfileSidebar
          isOpen={profile}
          handleProfile={handleProfile}
          groupStaff={store?.groupStaff}
          selectedGroup={selectedGroup}
          dispatch={dispatch}
          store={store}
          />
        </div>
    </div>
  )
}

export default ChatLog
