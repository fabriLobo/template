import { combineReducers } from 'redux'
import todosReducer from './todos'
import authenticationReducer from './authentication'

const rootReducer = combineReducers({
  todosReducer,
  authenticationReducer,
})

export default rootReducer
