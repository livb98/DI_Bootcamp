import React, { useState } from "react";
import { ThemeProvider, useTheme, ThemeContext } from './component/ThemeContext'
import { useRef,useContext } from "react";
import Todo from "./component/Todo";


// // exercise1
// function ThemeSwitcher() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       <p>Current Theme: {theme}</p>
//     </div>
//   );
// }


// function App() {
//   const themeRef = useRef()

//   return (
//     <ThemeProvider >
//       <div className="App" >
//         <h1>Theme Switcher Example</h1>
//         <ThemeSwitcher />
//       </div>
//     </ThemeProvider>
//   );
// }

// // exercise2
// function CharacterCounter() {
//   const inputRef = useRef(null);
//   const [input, setInput] = useState('')

//   const handleInputChange = () => {
//     const textLength = inputRef.current.value.length;
//     setInput(textLength)
//     return textLength
  
//   };

//   return (
//     <div>
//       <h1>Character Counter</h1>
//       <textarea
//         ref={inputRef}
//         onChange={handleInputChange}
//         placeholder="Type something..."></textarea>
//       <p>Character Count: {input}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <CharacterCounter />
//     </div>
//   );
// }

// exercise3
function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}


export default App;

