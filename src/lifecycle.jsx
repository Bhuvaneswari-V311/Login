// React function 
// // mounting(componentdidmount equivalent)
// import {useEffect} from 'react'
// function Mycomponent(){
//     useEffect(()=>{
//         console.log("Hi");
        
//     },[]);
//     return(
//         <h1>Hi</h1>
//     )
// }
// export default Mycomponent


// // updating(componentdidupdat equivalent)
// import { useEffect,useState } from "react";
// function Counter(){
//     const[count,setCount]=useState(0);
//     useEffect(()=>{
//         console.log(`Count changed to: ${count}`);
        
        
//     },[count])
//         useEffect(()=>{
//         console.log("Hi");
        
//     },[]);
//     return(
//         <>
//         <h1>{count}</h1>
//         <h1>Hello</h1>
//         <button onClick={()=>setCount(count+1)}>Increment</button>
//         </>
//     )
// }
// export default Counter



// // unmount(component will unmount)
// import { useEffect } from "react";
// function Counter(){
//     useEffect(()=>{
//         const timer=setInterval(()=>{
//             console.log('Timer running');
            
//         },1000)
//         return()=>{
//             clearInterval(timer);
//             console.log("component unmounted");
            
//         }
//     },[])
//     return(
//         <>
//         <h1>Hi</h1>
//         </>
//     )

// }
// export default Counter




// // // mounting(componentdidmount equivalent) using class component
// import React, { Component } from 'react';

// class MyComponent extends Component {
//     componentDidMount() {
//         console.log("Hi");
//     }

//     render() {
//         return (
//             <h1>Hi</h1>
//         );
//     }
// }

// export default MyComponent;





// // // updating(componentdidupdat equivalent) using class component
// import React, { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.count !== this.state.count) {
//       console.log(`Count changed to: ${this.state.count}`);
//     }
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.incrementCount}>Increment</button>
//       </>
//     );
//   }
// }

// export default Counter;





// // unmount(component will unmount)using class 
import React, { Component } from "react";

class Counter extends Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Timer running");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component unmounted");
  }

  render() {
    return (
      <>
        <h1>Hi</h1>
      </>
    );
  }
}

export default Counter;
