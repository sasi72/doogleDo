import React, { useState, useEffect } from 'react'
import Todo from './todo'
import TodoForm from './todoForm'

const STORAGE_KEY = 'todoApp.todos'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [edit, setEdit] = useState(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setTodos(JSON.parse(raw))
    } catch (e) {
      console.error('Failed to load todos', e)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    } catch (e) {
      console.error('Failed to save todos', e)
    }
  }, [todos])

  const addTodo = text => {
    if (!text || /^\s*$/.test(text)) return
    const newTodo = { id: Date.now(), text: text.trim(), isComplete: false }
    setTodos(prev => [newTodo, ...prev])
  }

  const updateTodo = (id, newText) => {
    if (!newText || /^\s*$/.test(newText)) return
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, text: newText.trim() } : t)))
    setEdit(null)
  }

  const removeTodo = id => setTodos(prev => prev.filter(t => t.id !== id))

  const toggleComplete = id => setTodos(prev => prev.map(t => (t.id === id ? { ...t, isComplete: !t.isComplete } : t)))

  return (
    <>
      <h1>Craft your day</h1>
      <TodoForm
        onSubmit={addTodo}
        edit={edit}
        onUpdate={updateTodo}
        onCancel={() => setEdit(null)}
      />

      <div className="todo-container">
        {todos.length === 0 ? (
          <p className="empty">Kick things off by adding a task above!</p>
        ) : (
          todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onComplete={() => toggleComplete(todo.id)}
              onDelete={() => removeTodo(todo.id)}
              onEdit={() => setEdit(todo)}
            />
          ))
        )}
      </div>
    </>
  )
}

export default TodoList