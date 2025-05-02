import { useNavigate } from "react-router-dom";  
 function Contact1(){
     const Navigate = useNavigate()
     const gotoContact= () =>{
         Navigate('/Home')
     }
     const gotoAbout= () =>{
         Navigate('/About')
     }
     return(
         <>
         <button onClick={gotoContact}>Go to Home</button>
         <button onClick={gotoAbout}>Go to About</button>
 
      </>
     )
 }
 export default  Contact1