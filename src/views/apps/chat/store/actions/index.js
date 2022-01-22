import axios from 'axios'
import config from '../../../../../configs/themeConfig'

const ApiUrl = 'http://localhost:5007/api/v1/admin'
export const getUserProfile = () => {
  return dispatch => {
    return axios.get('/apps/chat/users/profile-user').then(res => {
      console.log(res.data)
      return dispatch({
        // type: 'GET_GROUPS',
        // getGroups: res.data
      })
    })
  }
}
export const getGroups = () => {
  return dispatch => {
    axios.get(`${ApiUrl}/group`).then(res => {
      dispatch({
        type: 'GET_GROUPS',
        getGroups: res.data.data
      })
    })
  }
}
export const getBrandOptions = id => {
  return async dispatch => {
    await axios
      .get(`${ApiUrl}/brand/names`)
      .then(response => {
        dispatch({
          type: 'BRAND_OPTIONS',
          brandOptions: response.data.data
        })
      })
      .catch(err => console.log(err))
  }
} 
export const selectChat = id => {
  return dispatch => {
    axios.get(`${ApiUrl}/chat/${id}`, id).then(res => {
      dispatch({ type: 'SELECTED_GROUP', data: id })
      dispatch({ type: 'SELECT_CHAT', data: res.data.data[0] })
    })
  }
} 
 
export const sendMsg = (obj) => {
  return dispatch => {
    axios.post(`${config.app.ApiUrl}/chat`, obj).then(res => {
      // dispatch({ type: 'SEND_MSG', data: res.data })
      dispatch(selectChat(obj.group_id))
    })
  }
} 
export const sendFile = (File, selectedGroup) => {
  return dispatch => {
    axios.post(`${config.app.ApiUrl}/upload/image/`, File).then(res => {
      // dispatch({ type: 'SEND_MSG', data: res.data })
      dispatch(selectChat(selectedGroup))
    })
  }
} 


//=======================

export const getCompanyList = id => {
  return async dispatch => {
    await axios
      .get(`${config.app.ApiUrl}/company/names`)
      .then(response => {
        dispatch({
          type: 'GET_COMPANY_LIST',
          companyList: response.data.data
        })
      })
      .catch(err => console.log(err))
  }
} 

export const create = (data) => {
  return async dispatch => {
    await axios
      .post(`${config.app.ApiUrl}/group`, data)
      .then(response => {
        dispatch({
          type: 'NEW_GROUP',
          newStaff: response.data
        })
        dispatch(getGroups())
      })
      .catch(err => console.log(err))
  }
} 

export const getCompanyBrandEmployees = (data) => {
  return async dispatch => {
    await axios
      .post(`${config.app.ApiUrl}/staff/company-brand`, data)
      .then(response => {
        dispatch({
          type: 'COMPANY_STAFF',
          companyBrandStaff: response.data.data
        })
      })
      .catch(err => console.log(err))
  }
}