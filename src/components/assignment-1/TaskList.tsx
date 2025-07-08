import React from 'react';
import {type TaskListProps} from './type'
function TaskList({ tasks }:TaskListProps)  {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>  
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
