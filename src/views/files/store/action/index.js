import axios from 'axios'
import config from '../../../../configs/themeConfig'
export const getAllData = () => {
  return async dispatch => {
    await axios.get(`${config.app.ApiUrl}/media/upload`).then(response => {
      dispatch({
        type: 'GET_ALL_DATA',
        data: response.data.data
      })
    })
  }
}  
export const create = (data) => {
  return dispatch => {
    axios.post(`${config.app.ApiUrl}/media/upload`, data).then(res => {
      dispatch(getAllData)
    })
  }
} 
export const remove = (id) => {
  return async dispatch => {
    await axios
      .delete(`${config.app.ApiUrl}/media/upload/${id}`)
      .then(response => {
         dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}

