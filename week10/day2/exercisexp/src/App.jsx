import { useState, useReducer, useRef } from "react";
import Toggle from "../component/Toggle";
import "./App.css";

// exercise1
export const initialState = {
  count: 0,
  tasks: [],
};

const ADD_TASK = "add_task";
const TOGGLE_TASK = "toggle_task";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = { name: action.payload, toggle: false };
      return { ...state, tasks: [...state.tasks, newTask] };

    case TOGGLE_TASK:
      const updatedTasks = state.tasks.map((task, index) => {
        if (index === action.payload) {
          return { ...task, toggle: !task.toggle };
        }
        return task;
      });
      return { ...state, tasks: updatedTasks };
    case DEL_TASK:
      const delTask = task.sp
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef("");

  const addTask = () => {
    dispatch({ type: ADD_TASK, payload: inputRef.current.value });
    inputRef.current.value = "";
  };

  const handleToggleChange = (index) => {
    dispatch({ type: TOGGLE_TASK, payload: index });
  };

  return (
    <>
      <div>
        <h2>Tasks</h2>
        <input ref={inputRef} />
        <button onClick={() => addTask()}>Add Task</button>

        <div style={{ display: 'inline' }}>
          {state.tasks.map((item, i) => {
            return (
              <div key={i}>
                {item.name}
                <div>
                  <Toggle 
                    toggle={item.toggle} 
                    handleToggleChange={() => handleToggleChange(i)} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
