import { useState } from "react";
export default function ToggleSwitch(){
    const[isOn,setIsOn] =useState(false);
    function alternar(){
        setIsOn(!isOn);
    }
    return(
    <div>
        <h1>Boton alternar</h1>
      <button onClick={alternar}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
    );
}