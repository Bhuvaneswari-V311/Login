// import React,{useContext} from "react";
// import { NameContext } from "./NameProvider";
// const Home=()=>{
//     const{name,setName}=useContext(NameContext);
//     return(
//         <div>
//             <h1>Name:{name}</h1>
//             <button onClick={()=>setName('Bhuvi')}>Change</button>
//         </div>
//     )
// }
// export default Home;



import React, { useContext } from "react";
import { NumberContext}  from './NameProvider'

const Home = () => {
  const { number, setNumber } = useContext(NumberContext); 
   const{age,setAge}=useContext(NumberContext)
  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <button onClick={() => setNumber(number - 1)}>Decrement</button><br></br>
      <label for="Age">Age:</label>
      <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}></input>
      <p>You typed:{age}</p>
    </div>
  );
};

export default Home;
