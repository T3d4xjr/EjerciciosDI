import { useState } from "react";

export default function Counter2(){
    const[count,setCount]= useState(0);

    function incremento(){
        setCount(count+1)
    }
    function disminuir(){
        setCount(count-1)
    }

    return(
        <div>
            <button onClick={incremento}> Incrementar</button>
            <button onClick={disminuir}> Disminuir</button>
            <p>El contador se incremento o disminuyotantas veces,{count}</p>
        </div>
    );
}