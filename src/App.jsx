// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import Handler from './Style'
// // import Color from './Style'
// // import Mycomponent from './lifecycle'
// // import Greetings from './Greetings'
// // import Person from './Person'
// // import Namein from './Namein'
// // import './input.css'
// // import Answer from './Answer'
// // import Ctask from './Ctask'
// // import Student from './proptask'
// // import './App.css'
// // import Apple from './Apple'
// // import Use from "./Use"
// // import Table from './Table'
// // import Avatar from './Avatar'
// // import Profile from './Profile'
// // import InputFocus from './Profile'
// // import Counter from './Profile'
// // import UserProfile from './Profile'
// // import React from 'react'
// // import NameProvider from './NameProvider'
// // import Home from './Home'
// // import Toggle from './Toggle'
// // import { ThemeProvider } from './ThemeContext'
// // import Click from './EventHandlers'
// // import Style from './Style'
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// // import Contact from './Contact'
// // import About from './About'
// // import Contact1 from './Contact1'

// import Login from './components/Login'

// function App() {
//   // const [count, setCount] = useState(0)

  //  return (      <>
//     //   <div>
//     //     <a href="https://vite.dev" target="_blank">
//     //       <img src={viteLogo} className="logo" alt="Vite logo" />
//     //     </a>
//     //     <a href="https://react.dev" target="_blank">
//     //       <img src={reactLogo} className="logo react" alt="React logo" />
//     //     </a>
//     //   </div>
//     //   <h1>Vite + React</h1>
//     //   <div className="card">
//     //     <button onClick={() => setCount((count) => count + 1)}>
//     //       count is {count}
//     //     </button>
//     //     <p>
//     //       Edit <code>src/App.jsx</code> and save to test HMR
//     //     </p>
//     //   </div>
//     //   <p className="read-the-docs">
//     //     Click on the Vite and React logos to learn more
//     //   </p>
//     // </>
//   //  <div>
//   //     <Student name="Bhuvi"/>
//   // //  </div>
//   // <>
//   //  <Namein/>
//   // </>
//   // <>
//   // <Person name="Bhuvi"/>
//   // <Person/>
//   // </>
//   // <>
//   // <Use/>
//   // </>
//   // <>
//   // <Table/>
//   // </>
//   // <>
//   // <Avatar/>
//   // </>
//   // <>
//   // <Profile/>
//   // </>
//   // <>
//   // <InputFocus/>
//   // </>
//   // <>
//   // <Counter/>
//   // </>
//   // <>
//   // <UserProfile/>
//   // </>
//     // <NameProvider>
//     //   <Home/>
//     // </NameProvider>
// //  <ThemeProvider>
// //   <Toggle/>
// // </ThemeProvider> 
// //  <>
// // <Click/>
// // </> 
// //  <>
// // <Style/>
// // </> 
// //  <>
// // <Mycomponent/>
// // </> 
// //  <Router>
// // <Routes>
// //   <Route path="/" element={<Contact/>} />
// //   <Route path="/About" element={<About/>} />
// //   <Route path="/Contact1" element={<Contact1/>} />
// // </Routes>
// // </Router>
// <>

// <Login/>
//  </> 
// )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Table from './components/Table';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </Router>
  );
};

export default App;