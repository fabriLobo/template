import React, { useState, useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { FaPlusSquare } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import TodoList from '../todo/TodoList'
import Input from '../common/input'
import { addTodoValidation } from '../../utils/validations'
import {
  addItemToArray,
  removeItemFromArrayByIndex,
} from '../../utils/array-utils'
import { todoListState } from '../../recoil/atoms'

const TodoWithRecoilContainer = () => {
  const { t } = useTranslation()
  const [todosList, settodosList] = useRecoilState(todoListState)

  const [newTodo, setNewTodo] = useState('')

  const handleAddTodo = useCallback(() => {
    if (addTodoValidation(newTodo)) {
      settodosList(addItemToArray(todosList, newTodo))
      setNewTodo('')
    }
  }, [newTodo, todosList])

  const handleDeleteTodo = useCallback(
    (index) => settodosList(removeItemFromArrayByIndex(todosList, index)),
    [todosList],
  )

  return (
    <div className="todo-container">
      <h1>{t('todo-title')} - Recoil</h1>
      <div className="todo-input-section">
        <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <FaPlusSquare onClick={handleAddTodo} className="todo-add-icon" />
      </div>
      <TodoList todosList={todosList} onDeleteTodo={handleDeleteTodo} />
    </div>
  )
}

export default TodoWithRecoilContainer
