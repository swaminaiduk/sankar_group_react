const initialState = {
  chats: [],
  contacts: [],
  userProfile: {},
  selectedUser: {},
  getGroups: [],
  companyList: {},
  brandOptions: [],
  companyBrandStaff: []
}

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GROUPS':
      return { ...state, getGroups: action.getGroups }
    case 'GET_USER_PROFILE':
      return { ...state, userProfile: action.userProfile }
    case 'GET_CHAT_CONTACTS':
      return { ...state, chats: action.data.chatsContacts, contacts: action.data.contacts }
    case 'SELECT_CHAT':
      return { ...state, selectedUser: action.data }
    case 'SELECTED_GROUP': 
      return { ...state, selectedGroup: action.data }
    case 'GET_COMPANY_LIST': 
      return { ...state, companyList: action.companyList }
    case 'BRAND_OPTIONS':
      return { ...state, brandOptions: action.brandOptions }
    case 'COMPANY_STAFF': 
      return { ...state, companyBrandStaff: action.companyBrandStaff }
    case 'SEND_MSG':
      // ** Add new msg to chat
      const newMsg = action.data.response.chat
      return { ...state, selectedUser: { ...state.selectedUser, chat: newMsg } }
    default:
      return state
  }
}

export default chatReducer
