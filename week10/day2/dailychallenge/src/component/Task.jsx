// TaskComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, updateTask } from '../redux/action';

const TaskComponent = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  const handleAddTask = (day, task) => {
    dispatch(addTask(day, task));
  };

  const handleRemoveTask = (day, taskIndex) => {
    dispatch(removeTask(day, taskIndex));
  };

  const handleUpdateTask = (day, task) => {
    dispatch(updateTask(day, task));
  };

};

export default TaskComponent;
