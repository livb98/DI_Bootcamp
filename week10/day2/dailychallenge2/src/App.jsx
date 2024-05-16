import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask,removeTask, updateTask } from './redux/action';

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const [selectedDay, setSelectedDay] = useState('');
  const [taskText, setTaskText] = useState('');
  const [taskIdToUpdate, setTaskIdToUpdate] = useState(null);
  const [updatedTaskText, setUpdatedTaskText] = useState('');

  const handleAddTask = () => {
    if (selectedDay && taskText) {
      const task = { id: Date.now(), text: taskText };
      dispatch(addTask(selectedDay, task));
      setTaskText('');
    }
  };

  const handleRemoveTask = (day, taskId) => {
    dispatch(removeTask(day, taskId));
  };

  const handleUpdateTask = () => {
    if (selectedDay && taskIdToUpdate && updatedTaskText) {
      const updatedTask = { id: taskIdToUpdate, text: updatedTaskText };
      dispatch(updateTask(selectedDay, updatedTask));
      setTaskIdToUpdate(null);
      setUpdatedTaskText('');
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <label>
          Select Day:
          <input
            type="date"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
          />
        </label>
      </div>
      <div>
        <h2>Tasks for {selectedDay || '...'}</h2>
        {tasks[selectedDay] && tasks[selectedDay].length > 0 ? (
          <ul>
            {tasks[selectedDay].map((task) => (
              <li key={task.id}>
                {task.text}
                <button onClick={() => handleRemoveTask(selectedDay, task.id)}>
                  Remove
                </button>
                <button
                  onClick={() => {
                    setTaskIdToUpdate(task.id);
                    setUpdatedTaskText(task.text);
                  }}
                >
                  Update
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks for this day.</p>
        )}
      </div>
      <div>
        <h2>Add Task</h2>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Task text"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      {taskIdToUpdate && (
        <div>
          <h2>Update Task</h2>
          <input
            type="text"
            value={updatedTaskText}
            onChange={(e) => setUpdatedTaskText(e.target.value)}
            placeholder="Updated task text"
          />
          <button onClick={handleUpdateTask}>Update Task</button>
        </div>
      )}
    </div>
  );
};

export default App;
