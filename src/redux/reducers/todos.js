import { ADD_TODO_TYPE, REMOVE_TODO_TYPE } from '../actions/todos'
import {
  addItemToArray,
  removeItemFromArrayByIndex,
} from '../../utils/array-utils'

export const initState = {
  todosList: [],
}

const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO_TYPE:
      return {
        ...state,
        todosList: addItemToArray(state.todosList, action.payload.item),
      }
    case REMOVE_TODO_TYPE:
      return {
        ...state,
        todosList: removeItemFromArrayByIndex(
          state.todosList,
          action.payload.index,
        ),
      }
    default:
      return state
  }
}

export default todosReducer
