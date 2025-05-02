import React from "react";
function Agein({name,age,place,father,mother,phone,blood,height,weight,nationaity}){
    return(
        <>
         <label for="Name">Name:{name}</label>
        <input type="text" id="Name" name="Name"></input>
         
          <label for="Age">Age:{age}</label>
          <input type="text" id="Age" name="Age"></input>
          <label for="Place">Place:{place}</label>
          <input type="text" id="Place" name="Place"></input>
          <label for="Father">Father:{father}</label>
          <input type="text" id="Father" name="Father"></input>
          <label for="Mother">Mother:{mother}</label>
          <input type="text" id="Mother" name="Mother"></input>
          <label for="Phone">Phone:{phone}</label>
          <input type="text" id="Phone" name="Phone"></input>
          <label for="Blood">BloodGroup:{blood}</label>
          <input type="text" id="Blood" name="Blood"></input>
          <label for="Height">Height:{height}</label>
          <input type="text" id="Height" name="Height"></input>
          <label for="Weight">Weight:{weight}</label>
          <input type="text" id="Weight" name="Weight"></input>
          <label for="Nationality">Nationality:{nationaity}</label>
          <input type="text" id="Nationality" name="Nationality"></input>
         
   </>
)
}
export default Agein