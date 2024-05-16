export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export const addTask = (day, task) => ({
  type: ADD_TASK,
  payload: { day, task }
});

export const removeTask = (day, taskIndex) => ({
  type: REMOVE_TASK,
  payload: { day, taskIndex }
});

export const updateTask = (day, task) => ({
  type: UPDATE_TASK,
  payload: { day, task }
});

