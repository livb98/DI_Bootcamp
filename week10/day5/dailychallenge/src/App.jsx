import { useState } from 'react'
import Task from './features/Task'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Task/>
    </>
  )
}

export default App
