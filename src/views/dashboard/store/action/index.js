import axios from 'axios'
import config from '../../../../configs/themeConfig'

export const getDashboardCount = () => {
  return async dispatch => {
    await axios
      .get(`${config.app.ApiUrl}/staff/dashboard`)
      .then(response => {
        dispatch({
          type: 'DASHBOARD_CNT',
          DashboardCnt: response.data.data
        })
      })
      .catch(err => console.log(err))
  }
} 