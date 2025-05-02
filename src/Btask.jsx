import React from "react";
import Atask from "./Atask";

function Btask(props) {
  return (
    <>
      <h1>Btask: {props.btask}</h1>
      <h1>Btask1: {props.btask1}</h1>  
      <Atask atask="Bhuvi" atask1="21" />
    </>
  );
}

export default Btask;
