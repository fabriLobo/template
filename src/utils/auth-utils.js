import { login } from '../api/services'
import { logout, login as loginAction } from '../redux/actions/authentication'

const AUTH_TOKEN = 'authToken'

export const navigateToHome = (navigate) => navigate('/home')
export const navigateToLogin = (navigate) => navigate('/login')

export const loginSubmit = (values) => login(values)

export const saveAuthTokenLocalStorage = () =>
  localStorage.setItem(AUTH_TOKEN, 'some_token')

export const removeAuthTokenLocalStorage = () =>
  localStorage.removeItem(AUTH_TOKEN)

export const getAuthTokenLocalStorage = () => localStorage.getItem(AUTH_TOKEN)

export const actionsAfterLogin = (dispatch, navigate) => {
  navigateToHome(navigate)
  saveAuthTokenLocalStorage()
  dispatch(loginAction())
}

export const actionsAfterLogout = (dispatch, navigate) => {
  navigateToLogin(navigate)
  dispatch(logout())
  removeAuthTokenLocalStorage()
}
