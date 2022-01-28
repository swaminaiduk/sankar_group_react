import axios from 'axios'
import config from '../../../../../configs/themeConfig'

export const getGroups = (emp_id) => {
  return dispatch => {
    axios.get(`${config.app.ApiUrl}/group/${emp_id}`).then(res => {
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
      .get(`${config.app.ApiUrl}/brand/names`)
      .then(response => {
        dispatch({
          type: 'BRAND_OPTIONS',
          brandOptions: response.data.data
        })
      })
      .catch(err => console.log(err))
  }
} 
export const selectChat = item => {
  return dispatch => {
    axios.get(`${config.app.ApiUrl}/chat/${item.id}`, item.id).then(res => {
      dispatch({ type: 'SELECTED_GROUP', data: item })
      dispatch({ type: 'SELECT_CHAT', data: res.data.data[0] })
    })
  }
} 
 
export const sendMsg = (obj, selectedGroup) => {
  return dispatch => {
    axios.post(`${config.app.ApiUrl}/chat`, obj).then(res => {
      dispatch(selectChat(selectedGroup))
    })
  }
} 
export const sendFile = (File, selectedGroup) => {
  return dispatch => {
    axios.post(`${config.app.ApiUrl}/upload/image/`, File).then(res => {
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
        dispatch(getGroups(data.emp_id))
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
export const getGroupStaff = (groupId) => {
  return async dispatch => {
    await axios
      .get(`${config.app.ApiUrl}/group/groupEmployees/${groupId}`)
      .then(response => {
        dispatch({
          type: 'GROUP_STAFF',
          groupStaff: response.data.data
        })
      })
      .catch(err => console.log(err))
  }
} 

export const removeGroupStaff = (selectedGroup, staffId) => {
  return async dispatch => {
    await axios
      .delete(`${config.app.ApiUrl}/group/${selectedGroup.id}/${staffId}`)
      .then(response => {
        dispatch({
          type: 'GROUP_STAFF_DELETE',
          groupStaff: response.data.data
        })
        dispatch(selectChat(selectedGroup))
      })
      .catch(err => console.log(err))
  }
}

export const addStaffGroup = (data) => {
  return async dispatch => {
    await axios
      .post(`${config.app.ApiUrl}/group/addStaff`, data)
      .then(response => {
        dispatch({
          type: 'GROUP_STAFF_DELETE',
          groupStaff: response.data.data
        })
        dispatch(selectChat(data.selectedGroup))
      })
      .catch(err => console.log(err))
  }
}
