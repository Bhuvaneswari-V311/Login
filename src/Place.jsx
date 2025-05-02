import React from "react";
import Age from  "./Age"
function Place(props){
    return(
        <>
    <h2>Place:{props.place}</h2>
    <Age age="21"/>
    </>
    );
}
export default Place