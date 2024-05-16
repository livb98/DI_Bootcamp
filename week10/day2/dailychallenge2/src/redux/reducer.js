// reducer.js
import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from "./action";

const initialState = {};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const { day, task } = action.payload;
      return {
        ...state,
        [day]: state[day] ? [...state[day], task] : [task]
      };
    case REMOVE_TASK:
      const { day: dayToRemove, taskIndex } = action.payload;
      return {
        ...state,
        [dayToRemove]: state[dayToRemove].filter(task => task.id !== taskIndex)
      };
    case UPDATE_TASK:
      const { day: dayToUpdate, task: updatedTask } = action.payload;
      return {
        ...state,
        [dayToUpdate]: state[dayToUpdate].map(task => 
          task.id === updatedTask.id ? updatedTask : task
        )
      };
    default:
      return state;
  }
};

export default tasksReducer;
