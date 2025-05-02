import React from "react";
import Btask from "./Btask"; 

function Ctask(props) {
  return (
    <>
      <h1>Ctask: {props.ctask}</h1> 
      <h1>Ctask1: {props.ctask1}</h1> 
      <Btask btask="Sai" btask1="9"/>
    </>
  );
}

export default Ctask;

