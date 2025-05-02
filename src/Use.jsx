// // import { useState } from "react";
// // function Counter(){
// //     const[count,setCount]=useState(0);
// //     return(
// //         <div>
// //             <p>Count:{count}</p>
// //             <button onClick={()=>setCount(count+1)}>Increment</button>
// //         </div>
// //     );
// // }
// // export default Counter


// // import { useState } from "react";
// // function Text(){
// //     const[count,setCount]=useState(0)
// //     const[val,setVal]=useState(0)
// //         return(
// //         <>
// //     <label for="Name">Name:</label>
// //     <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}
// //     placeholder="Enter ur name"/>
// //     <p>You typed:{count}</p>

// //     <label for="Name">Age:</label>
// //     <input type="text"  onChange={(e)=>setVal(e.target.value)}
// //     placeholder="Enter ur name"/>
// //     <p>You typed:{val}</p>
// //     </>
// //     )
// // }
// // export default Text



// // import { useState } from "react";
// // function ShowHidetext(){
// //     const[isvisible,setIsvisible]=useState(false)
// //     return(
// //         <div>
// //             <button onClick={()=>setIsvisible(!isvisible)}>{isvisible?"Hide":"Show"}</button>
// //             {isvisible && <h2>Hello,World!</h2>}
// //         </div>
// //     )
// // }
// // export default ShowHidetext





// // import { useState } from "react";
// // function ShowHidetext(){
// //     const[isvisible,setIsvisible]=useState(false)
// //     return(
// //         <div>
// //             <button onClick={()=>setIsvisible(!isvisible)}>
// //                 {/* {isvisible?"On":"Off"} */} Button
// //                 </button>
// //            {isvisible? "On":"Off"}
// //         </div>
// //     )
// // }
// // export default ShowHidetext




// // import { useState } from "react";
// // function Text(){
// //     const[count,setCount]=useState(0)

// //         return(
// //         <>
// //     <label for="Name">Name:</label>
// //     <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}
// //     placeholder="Enter ur name"/>
// //     <p>You typed:{count}</p>

// //     <label for="Name">Age:</label>
// //      <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}
// //     placeholder="Enter ur name"/>
// //     <p>You typed:{count}</p>

// //     </>
// //     )
// // }
// // export default Text


// // useeffect without dependencies
// // import { useState,useEffect } from "react";
// // function Counter(){
// //     const[count,setCount]=useState(0);
// //     useEffect(()=>{
// //     //    console.log("component rendered!");

// //     }
// //     );
// //     return(
// //         <>
// //                 <p>Count:{count}</p>
// //         <button onClick={()=>setCount(count+1)}>Increment</button>
// //         </>
// //     )
// // }
// // export default Counter



// // useeffect with an empty dependencies
// import { useState,useEffect } from "react";
// function Counter(){
//     const[count,setCount]=useState(0);
//     useEffect(()=>{
//         fetch('https://fakestoreapi.com/products/1')
//         .then((res)=>res.json())
//         .then((result)=>setCount(result))  
        

//     },[])
//     return(
//       <div>
//         Data:{JSON.stringify(count)}
//       </div>
//     )
// }
// export default Counter


