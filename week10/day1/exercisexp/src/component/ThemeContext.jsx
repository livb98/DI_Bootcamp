import React, { createContext, useContext, useState, useRef} from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const themeRef = useRef('white')
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    themeColor()
  };

  const themeColor = () => {
  if (theme !== 'light') {
    themeRef.current.style.backgroundColor = 'white'
    themeRef.current.style.color = 'black'
} else {
  themeRef.current.style.backgroundColor = 'grey'
  themeRef.current.style.color = 'white'
}
}


  return (
    <>
    <div ref={themeRef} style={{backgroundColor: themeRef.current}}>
    <ThemeContext.Provider  value={{ theme, toggleTheme }} >
      {children}
    </ThemeContext.Provider>
    </div>
    </>

  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };