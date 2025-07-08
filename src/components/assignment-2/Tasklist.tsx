"use client"
import React, { useState, useCallback } from 'react'
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
interface TaskItemProps {
  task: Task;
  onComplete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = React.memo(({ task, onComplete }) => {
  console.log(`Rendering task ${task.id}`); 
  return (
    <li
      style={{
        marginBottom: '0.5rem',
        textDecoration: task.completed ? 'line-through' : undefined,
        color: task.completed ? 'gray' : 'blue',
      }}
    >
      {task.title}{' '}
      {!task.completed && (
        <button onClick={onComplete} style={{ marginLeft: '1rem' }}>
          Complete
        </button>
      )}
    </li>
  );
});

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Write Code', completed: false },
    { id: 3, title: 'Read Book', completed: false },
  ]);
  const handleComplete = useCallback(
    (id: number) => () => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: true } : task
        )
      );
    },
    []
  );

  return (
    <div style={{ fontFamily: 'Arial', padding: '1rem' }}>
      <h2>Tasks</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={handleComplete(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
