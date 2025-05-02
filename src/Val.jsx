// import React from "react";
// function Val({name,age,place,phoneno}){
//     return(
//         <>
//         <h1>Name:{name}</h1>
//         <h1>Age:{age}</h1>
//         <h1>Place:{place}</h1>
//         <h1>Phoneno:{phoneno}</h1>
//         </>
//     )
// }
// export default Val



import { useState } from "react";
import './theme.css';

function Text() {
  const [count, setCount] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-theme' : ''}>
      <label htmlFor="Name">Name:</label>
      <input 
        type="text" 
        value={count} 
        onChange={(e) => setCount(e.target.value)}
        placeholder="Enter your name" 
      />
      <p>You typed: {count}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Text;
