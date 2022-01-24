import { useState, useContext, Fragment } from 'react'
import Avatar from '@components/avatar'
import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'
import { useDispatch } from 'react-redux'
import { toast, Slide } from 'react-toastify'
// import { handleLogin } from '@store/actions/auth'
import { AbilityContext } from '@src/utility/context/Can'
import { Link, useHistory } from 'react-router-dom'
import InputPasswordToggle from '@components/input-password-toggle'
import { getHomeRouteForLoggedInUser } from '@utils'
import {  Coffee } from 'react-feather'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import { loginWithJWT, handleLogin } from "../../../redux/actions/auth/loginActions"
import axios from "axios"
import {
  Alert,
  Row,
  Col,
  CardTitle,
  FormGroup,
  Label,
  CustomInput,
  Button
} from 'reactstrap'
import config from '../../../configs/themeConfig'

import '@styles/base/pages/page-auth.scss'
const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title font-weight-bold'>Welcome, {name}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>You have successfully logged in as an {role} user to Vuexy. Now you can start to explore. Enjoy!</span>
    </div>
  </Fragment>
)

const Login = props => {
  const [skin, setSkin] = useSkin()
  const ability = useContext(AbilityContext)
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  const handleSubmit = (event, errors) => {
    if (errors && !errors.length) {
      if (errors && !errors.length) {
        axios
        .post(`${config.app.ApiUrl}/staff/login`, { email, password })
        .then((response) => {
          let loggedInUser
          if (response.data.data[0]) {
            loggedInUser =  response.data.data
            dispatch(handleLogin(loggedInUser))
            history.push(getHomeRouteForLoggedInUser(loggedInUser.role))
            ability.update([
              {
                action: 'manage',
                subject: 'all'
              }
            ])
            toast.success(
              <ToastContent name={ loggedInUser.name  } role={loggedInUser.role || 'admin'} />,
              { transition: Slide, hideProgressBar: true, autoClose: 2000 }
            )
          }
        }) 
      }
    }
  }

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          <h2 className='brand-text text-primary ml-1'>Sankar Groups</h2>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login V2' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              Login
            </CardTitle>
            <AvForm className='auth-login-form mt-2' onSubmit={handleSubmit}>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  Mobile
                </Label>
                <AvInput
                  required
                  autoFocus
                  type='number'
                  value={email}
                  id='login-email'
                  name='login-email'
                  placeholder='7989138989'
                  onChange={e => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    MPIN
                  </Label>
                  <Link to='/forgot-password'>
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <InputPasswordToggle
                  required
                  tag={AvInput}
                  value={password}
                  id='login-password'
                  name='login-password'
                  className='input-group-merge'
                  onChange={e => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
              </FormGroup>
              <Button.Ripple color='primary' block disabled={!email.length || !password.length}>
                Sign in
              </Button.Ripple>
            </AvForm>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
