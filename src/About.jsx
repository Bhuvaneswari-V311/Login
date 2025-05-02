
 import { useNavigate } from "react-router-dom";  
function About(){
    const Navigate = useNavigate()
    const gotoContact= () =>{
        Navigate('/Contact')
    }
    const gotoContact1= () =>{
        Navigate('/Contact1')
    }
    return(
        <>
        <button onClick={gotoContact}>Go to Home</button>
        <button onClick={gotoContact1}>Go to Contact</button>

     </>
    )
}
export default About