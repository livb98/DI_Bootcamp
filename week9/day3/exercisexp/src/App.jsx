import { useState } from 'react'
import './App.css'
import BuggyCounter from '../component/Buggycounter.jsx'
import ErrorBoundaries from '../component/ErrorBoundaries'
import Color from '../component/Color'
import { Child } from '../component/Color'


// // exercise1
// // simulation1
// function App() {
//   return ( 
//   <>
//   <header>BUGGY COUNTER</header> <br></br>
//   <ErrorBoundaries>
//     <BuggyCounter/>
//     <BuggyCounter/>
//   </ErrorBoundaries>

//   </>
//   )
// }

// // simulation2
// function App() {
//   return ( 
//   <>
//   <header>BUGGY COUNTER</header> <br></br>
//   <ErrorBoundaries>
//     <BuggyCounter/>
//   </ErrorBoundaries>
  
//   <ErrorBoundaries>
//     <BuggyCounter/>
//   </ErrorBoundaries>

//   </>
//   )
// }

// // simulation2
// function App() {
//   return ( 
//   <>
//   <header>BUGGY COUNTER</header> <br></br>
//     <BuggyCounter/>
//   </>
//   )
// }

// // exercise2
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Color/>
//       </header>
//     </div>
//   );
// }

// exercise3
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      <Color/>
      </header>

    </div>
  )
}

export default App
