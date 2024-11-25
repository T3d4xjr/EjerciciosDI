import { useState } from "react";

export default function LoginControl(){
    const[isOn,setIsOn] =useState(true);
    function alternar(){
        setIsOn(!isOn);
    }
    return(
        <div>
         <h1>Boton Registro</h1>
      <button onClick={alternar}>
        {isOn ? "Iniciar Sesion" : "Cerrar Sesion"}
      </button>
        
        </div>
    );
}