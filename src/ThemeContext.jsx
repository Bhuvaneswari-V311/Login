
import React,{createContext,useState,useContext,useEffect} from "react";

const ThemeContext=createContext()
export const ThemeProvider=({children})=>{
    const[isDarkmode,setIsDarkmode]=useState(false)
    useEffect(()=>{
        if(isDarkmode){
            document.body.style.backgroundColor='black',
            document.body.style.color='white'
        }
        else{
              document.body.style.backgroundColor='white',
            document.body.style.color='black'
        }
    },[isDarkmode]);
    return(
        <ThemeContext.Provider value={{isDarkmode,setIsDarkmode}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme=()=>useContext(ThemeContext)