import { useState, useRef, useContext, createContext } from 'react'
import './App.css'
import Todo from '../../exercisexp/src/component/Todo'

// export const todoContext = createContext()


function App() {
  const [task, setTask] = useState('')
  console.log(task);

  return(
    <>
    <div>daily challenge</div>
    {/* <todoContext.Provider value={{task}}> */}
    <Todo/>
    {/* </todoContext.Provider> */}

    </>
  )

}

export default App
