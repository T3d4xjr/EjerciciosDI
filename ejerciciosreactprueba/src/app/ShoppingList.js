import { useState } from "react";

const productos = [
    {id:1,descripcion: "producto1"},
    {id:2,descripcion: "producto2"},
    {id:3,descripcion: "producto3"}
]
export default function ShoppingList(){
const[producto,setproducto] =useState(productos);
function handleDelete(productoId){
    setproducto(producto.filter(tarea => tarea.id !== productoId))
}
    return(
        <div>
                {producto.map(tarea => 
            <li key={tarea.id}> 
                
                <p>{tarea.descripcion}</p> 
                <button onClick={() => handleDelete(tarea.id)}>Eliminar</button>
            </li> )}
            
        </div>);
}