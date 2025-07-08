"use client"
import React, { useState } from 'react';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const ToDoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;

    const todo: Todo = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo('');
  };


  const toggleCompleted = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h2>ToDo List</h2>

      <input
        type="text"
        placeholder="Add new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter') addTodo(); }}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: 8 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
