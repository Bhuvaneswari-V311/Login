import React,{ useState } from "react";

import { useTheme } from "./ThemeContext";
function Text(){
    const[count,setCount]=useState('')
    const{isDarkmode,setIsDarkmode}=useTheme();
  return(
    <>
    <label htmlFor="Name">Name:</label>
      <input
        type="text"
        placeholder="Enter your name" value={count} onChange={(e)=>setCount(e.target.value)}
      /><br></br>
      <p>You typed:{count}</p>
      <button onClick={()=> setIsDarkmode(!isDarkmode)}>
        {isDarkmode? "ToggleTheme":"ToggleTheme"}
      </button>
</>
  )
}
export default Text