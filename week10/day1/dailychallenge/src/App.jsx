import { useState, useRef, useContext, createContext } from 'react'
import './App.css'
import TodoList from '../component/Edit2';

// export const todoContext = createContext()


// function App() {
//   const [task, setTask] = useState('')
//   console.log(task);

//   return(
//     <>
//     <div>daily challenge</div>
//     {/* <todoContext.Provider value={{task}}> */}
//     <Todo/>
//     {/* </todoContext.Provider> */}

//     </>
//   )

// }
function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}


export default App
