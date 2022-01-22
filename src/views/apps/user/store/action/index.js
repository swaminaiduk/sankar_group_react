import axios from 'axios'
import config from '../../../../../configs/themeConfig'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get(`${config.app.ApiUrl}/staff`).then(response => {
      dispatch({
        type: 'GET_ALL_STAFF_DATA',
        data: response.data.data
      })
    })
  }
}

// ** Get data on page or row change
export const getData = params => {
  return async dispatch => {
    await axios.get('/api/users/list/data', params).then(response => {
      dispatch({
        type: 'GET_DATA',
        data: response.data.users,
        totalPages: response.data.total,
        params
      })
    })
  }
} 
// ** Get User
export const getUser = id => {
  return async dispatch => {
    await axios
      .get('/api/users/user', { id })
      .then(response => {
        dispatch({
          type: 'GET_USER',
          selectedUser: response.data.user
        })
      })
      .catch(err => console.log(err))
  }
}
export const getCompanyList = id => {
  return async dispatch => {
    await axios
      .get(`${config.app.ApiUrl}/company/names`)
      .then(response => {
        dispatch({
          type: 'GET_COMPANY_LIST',
          companyList: response.data
        })
      })
      .catch(err => console.log(err))
  }
} 
export const getBrandOptions = id => {
  return async dispatch => {
    await axios
      .get(`${config.app.ApiUrl}/brand/names`)
      .then(response => {
        dispatch({
          type: 'BRAND_OPTIONS',
          brandOptions: response.data
        })
      })
      .catch(err => console.log(err))
  }
} 
export const create = (data) => {
  return async dispatch => {
    await axios
      .post(`${config.app.ApiUrl}/staff`, data)
      .then(response => {
        dispatch({
          type: 'NEW_STAFF',
          newStaff: response.data
        })
        dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
} 

export const remove = (id) => {
  return async dispatch => {
    await axios
      .delete(`${config.app.ApiUrl}/staff/${id}`)
      .then(response => {
         dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}

