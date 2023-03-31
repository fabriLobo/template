import React from 'react'
import { FaMinusSquare } from 'react-icons/fa'

const TodoList = ({ todosList, onDeleteTodo }) => (
  <ul className="todo-list">
    {todosList.map((todo, index) => (
      <li key={index}>
        <FaMinusSquare
          className="todo-delete-icon"
          onClick={() => onDeleteTodo(index)}
        />
        {todo}
      </li>
    ))}
  </ul>
)

export default TodoList
