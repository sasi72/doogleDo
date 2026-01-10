import React, { useState, useRef, useEffect } from 'react'

const TodoForm = ({ onSubmit, edit, onUpdate, onCancel }) => {
  const [input, setInput] = useState(edit ? edit.text : '')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [edit])

  useEffect(() => {
    if (edit) setInput(edit.text)
  }, [edit])

  const handleChange = e => setInput(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    if (edit) {
      onUpdate && onUpdate(edit.id, input)
    } else {
      onSubmit && onSubmit(input)
    }
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {edit ? (
        <>
          <input
            ref={inputRef}
            type="text"
            placeholder="Refine Task"
            value={input}
            onChange={handleChange}
            className="todo-input edit"
          />
          <div style={{ display: 'inline-flex', gap: 8 }}>
            <button type="submit" className="todo-button edit">Update</button>
            <button type="button" className="todo-button cancel" onClick={onCancel}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <input
            ref={inputRef}
            type="text"
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            className="todo-input"
          />
          <button type="submit" className="todo-button">Add to the List</button>
        </>
      )}
    </form>
  )
}

export default TodoForm