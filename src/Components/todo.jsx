import React from 'react'
import { FiTrash2, FiEdit3 } from 'react-icons/fi'

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
      <div className="text" onClick={onComplete} role="button" tabIndex={0}>
        {todo.text}
      </div>

      <div className="icons">
        <button type="button" aria-label="delete" className="icon" onClick={onDelete}>
          <FiTrash2 className="delete-icon" />
        </button>

        <button type="button" aria-label="edit" className="icon" onClick={onEdit}>
          <FiEdit3 className="edit-icon" />
        </button>
      </div>
    </div>
  )
}

export default Todo