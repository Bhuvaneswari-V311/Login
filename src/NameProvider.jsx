// import React,{createContext,useState} from "react"
// export const NameContext=createContext();
// export const NameProvider=({children})=>{
//     const[name,setName]=useState('John Doe');
//     return(
//         <NameContext.Provider value={{name,setName}}>
//             {children}
//         </NameContext.Provider>
//     )
// }
// export default NameProvider;



import React, { createContext, useState } from "react";
export const NumberContext = createContext();

export const NumberProvider = ({ children}) => {
  const [number, setNumber] = useState(0); 
  const [age,setAge]=useState(0)

  return (
    <NumberContext.Provider value={{ number, setNumber,age,setAge}}>
      {children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
