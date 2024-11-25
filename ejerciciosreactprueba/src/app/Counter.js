import { useState } from "react";
export default function Counter(){
    const [count, setCount]= useState(0);
    return(
        <div>
            <button onClick={() => setCount(count + 1)}> Incrementar</button>
            <p>El contador se incremento tantas veces,{count}</p>
        </div>
    );
}
