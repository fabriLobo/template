import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LoginContainer from '../components/login'
import { getAuth } from '../redux/selectors'
import { navigateToHome } from '../utils/auth-utils'

const LoginPageContainer = () => {
  const navigate = useNavigate()
  const auth = useSelector((state) => getAuth(state))

  useEffect(() => {
    auth && navigateToHome(navigate)
  }, [auth])

  return <LoginContainer />
}

export default LoginPageContainer
