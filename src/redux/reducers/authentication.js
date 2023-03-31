import { LOGIN_TYPE, LOGOUT_TYPE } from '../actions/authentication'

export const initState = {
  auth: false,
}

const authenticationReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_TYPE:
      return {
        ...state,
        auth: true,
      }
    case LOGOUT_TYPE:
      return {
        ...state,
        auth: false,
      }
    default:
      return state
  }
}

export default authenticationReducer
