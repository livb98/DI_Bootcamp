import './App.css'
import { Routes, Route } from "react-router-dom";
import PexelImage from '../component/PexelImages';
import Home from '../component/Home.jsx'
import Search from '../component/Search.jsx';



function App() {
  return (
    <>
    {/* <Routes>
      <Route path='/' element={<Home/>}/>

    </Routes> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>

    </>
  )
}

export default App
