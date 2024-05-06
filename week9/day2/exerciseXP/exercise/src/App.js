import logo from './logo.svg';
import './App.css';
import Car from './component/Car';
import Garage from './component/Garage';
import Event from './component/event';
import Phone from './component/phone';
import Color from './component/color';

// // exercise1
// export const carinfo = {name: "Ford", model: "Mustang"}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Car/>
//       </header>
//     </div>
//   );
// }

// // exercise2
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Event/>
//       </header>
//     </div>
//   );
// }

// // exercise3
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Phone/>
//       </header>
//     </div>
//   );
// }

// exercise4
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Color/>
      </header>
    </div>
  );
}

export default App;
