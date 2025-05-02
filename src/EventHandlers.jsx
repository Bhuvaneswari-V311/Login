// import React from "react";
// function Click(){
//     const Click=()=>{
//         alert('hi')
//     };
//     return(
//         <button onClick={Click}>Click me</button>
//     )
// }
// export default Click


import React from "react";
function HandleClick(name){
    alert('Hello'+name)
}
function App(){
    return <button onClick={()=>HandleClick('bhuvi')}>Greet</button>
}
export default App