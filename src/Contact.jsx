 import{useNavigate} from 'react-router-dom'
 function Contact(){
    const Navigate = useNavigate();
    const gotoAbout =() => {
        Navigate('/About')
    }
    const gotoContact1=() => {
        Navigate('/Contact1')
    }
    return(
        <>
        <button onClick={gotoAbout}>Go to About</button>
        <button onClick={gotoContact1}>Go to Contact</button>

        </>
    )
 }
 export default Contact
 



 