export const ADD_TODO_TYPE = 'add-todo'
export const REMOVE_TODO_TYPE = 'remove-todo'

export const addTodo = (item) => ({
  type: ADD_TODO_TYPE,
  payload: { item },
})

export const removeTodo = (index) => ({
  type: REMOVE_TODO_TYPE,
  payload: { index },
})
