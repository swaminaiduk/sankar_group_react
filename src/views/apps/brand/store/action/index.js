import axios from 'axios'
import config from '../../../../../configs/themeConfig'
const APIURL = 'http://localhost:5007/api/v1/admin/brand/'

export const getAllData = () => {
  return async dispatch => {
    await axios.get(APIURL).then(response => {
      dispatch({
        type: 'GET_ALL_BRAND_DATA',
        data: response.data.data
      })
      
    })
  }
}
export const create = (data) => {
  return async dispatch => {
    await axios
      .post(`${APIURL}`, data)
      .then(response => {
        dispatch({
          type: 'CREATE_BRAND',
          brandList: response.data
        })
        dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}
export const remove = (id) => {
  return async dispatch => {
    await axios
      .delete(`${config.app.ApiUrl}/brand/${id}`)
      .then(response => {
         dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}
