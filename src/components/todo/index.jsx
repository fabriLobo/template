import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlusSquare } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import TodoList from './TodoList'
import Input from '../common/input'
import { addTodo, removeTodo } from '../../redux/actions/todos'
import { getTodosList } from '../../redux/selectors'
import { addTodoValidation } from '../../utils/validations'

const TodoContainer = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const todosList = useSelector((state) => getTodosList(state))

  const [newTodo, setNewTodo] = useState('')

  const handleAddTodo = useCallback(() => {
    if (addTodoValidation(newTodo)) {
      dispatch(addTodo(newTodo))
      setNewTodo('')
    }
  }, [newTodo, dispatch])

  const handleDeleteTodo = useCallback(
    (index) => dispatch(removeTodo(index)),
    [],
  )

  return (
    <div className="todo-container">
      <h1>{t('todo-title')} - Redux</h1>
      <div className="todo-input-section">
        <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <FaPlusSquare onClick={handleAddTodo} className="todo-add-icon" />
      </div>
      <TodoList todosList={todosList} onDeleteTodo={handleDeleteTodo} />
    </div>
  )
}

export default TodoContainer
