import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import UserFavoriteAnimal from './UserFavoriteAnimals.js';
import Exercise from './exercise3.js';

// // exercise1
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Hello word</p>
//       </header>
//     </div>
//   );
// }

// // exercise2
// export const user = {
//   firstName: 'Bob',
//   lastName: 'Dylan',
//   favAnimals : ['Horse','Turtle','Elephant','Monkey']
// };

// const y = user.favAnimals

// function App() {
//   return (
//     <div>
//       <h3>{user.firstName}</h3>
//       <h3>{user.lastName}</h3>
//       <UserFavoriteAnimal userAnim = {user.favAnimals}/>
//     </div>
//   );
// }

// exercise3
function App() {
  return (
    <div>
      <Exercise/>
    </div>
  )
}

export default App


