import axios from "axios"
import { history } from "../../../history"
import { getHomeRouteForLoggedInUser } from '@utils'
import { toast, Slide } from 'react-toastify'
import config from '../../../configs/themeConfig'
export const changeRole = (role) => {
  return (dispatch) => dispatch({ type: "CHANGE_ROLE", userRole: role })
}
export const loginWithJWT = (email, password) => {
  return (dispatch) => {
    axios
      .post(`${config.app.ApiUrl}/staff/login`, { email, password })
      .then((response) => {
        let loggedInUser
        if (response.data.data[0]) {
          loggedInUser =  response.data.data[0]
          localStorage.setItem("userData", JSON.stringify(loggedInUser))
          dispatch({
            type: "LOGIN",
            payload: { loggedInUser, loggedInWith: "jwt" }
          })
          history.push(getHomeRouteForLoggedInUser(loggedInUser.role))
          // toast.success(
          //   <ToastContent name={data.fullName || loggedInUser.name || 'Swaminaidu'} role={loggedInUser.role || 'admin'} />,
          //   { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          // )
          // history.push("/")
          history.go(0)
        } else {
          console.log('Fail')
        }
      })
      .catch((err) => console.log(err))
  }
}

// ** Handle User Login
export const handleLogin = data => {
  return dispatch => {
    dispatch({ type: 'LOGIN', data })
    // ** Add to user to localStorage
    localStorage.setItem('userData', JSON.stringify(data))
  }
}

// ** Handle User Logout
export const handleLogout = () => {
  return dispatch => {
    dispatch({ type: 'LOGOUT' })

    // ** Remove user from localStorage
    localStorage.removeItem('userData')
  }
}
