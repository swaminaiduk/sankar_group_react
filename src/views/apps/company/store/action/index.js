import axios from 'axios'
import config from '../../../../../configs/themeConfig'
export const getAllData = () => {
  return async dispatch => {
    await axios.get(`${config.app.ApiUrl}/company`).then(response => {
      dispatch({
        type: 'GET_ALL_DATA',
        data: response.data
      })
    })
  }
}

// ** Get data on page or row change
export const getData = params => {
  return async dispatch => {
    await axios.get(`${config.app.ApiUrl}/company`, params).then(response => {
      dispatch({
        type: 'GET_DATA',
        data: response.data,
        totalPages: response.data.total,
        params
      })
    })
  }
}
 
export const postCompany = (data) => {
  return async dispatch => { 
    await axios
      .post(`${config.app.ApiUrl}/company`, data)
      .then(response => {
        dispatch({
          type: 'POST_COMPANY',
          selectedUser: response.data.user
        })
        dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}

export const remove = (id) => {
  return async dispatch => {
    await axios
      .delete(`${config.app.ApiUrl}/company/${id}`)
      .then(response => {
         dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}

