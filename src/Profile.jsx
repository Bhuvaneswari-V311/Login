import { useState, useEffect } from "react";

function UserProfile({moni}) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        console.log("Fetching data...");
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUserData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [moni]);

    return (
        <>
            <h2>{JSON.stringify(userData)}</h2>
            <h2>User IDs</h2>
            <ul>
                 {userData && userData.map(user => (
                    <li key={user.name}>{user.name}</li>
                     ))}
            </ul>
        </>
    );
}

export default UserProfile;



// import {useRef} from 'react';
// function InputFocus(){
//     const inputRef=useRef(null)
//     const handlefocus=()=>{
//         inputRef.current.focus();
//     };
//     return(
//         <div>
//             <input ref={inputRef} type="text"/>
//             <button onClick={handlefocus}>Focus</button>
//           </div>
//     );
// }
// export default InputFocus


// import {useRef,useState,useEffect} from 'react'
// function Counter(){
//     const [count,setCount]=useState(0)
//     const preconref=useRef(null);
//     useEffect(()=>{
//         preconref.current=count
//     })
//     return(

//         <div>
//             <p>Current Count:{count}</p>
//             <p>Precount:{preconref.current}</p>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//         </div>
//     )
// }
// export default Counter
