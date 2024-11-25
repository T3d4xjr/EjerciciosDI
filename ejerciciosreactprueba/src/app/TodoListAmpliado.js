// SOLUCIÓN EJERCICIO 8 BOLETÍN 1 CON LA PETICIÓN DE FRAN DE EDITAR UNA TAREA
// SOLO SE AÑADE COMENTARIO A LO NUEVO, SI NO SE ENTIENDE ALGO QUE NO ESTÁ COMENTADO
// REVISAR Tarea8SinUpdate
import {useState} from 'react';

const tareas = [
    {id:1,descripcion: "tarea1",completada:false},
    {id:2,descripcion: "tarea2",completada:false},
    {id:3,descripcion: "tarea3",completada:true}
]

let numId = 4


/*
    Me he creado un componente adicional para separar el código y verlo todo más claro
    Este componente Task se renderiza por cada elemento de mi array 
    Recibe por props: 
        - un objeto tarea por la prop 'tarea' al completo con todos sus atributos
        - una función por la prop 'onDelete' que gestionará el borrado
        - una función por la prop 'onCheck' que gestionará cuando se pulsa el checkbox
        - una función por la prop 'onUpdate' que gestionará cuando se modifique el texto de la tarea
    Estas funciones están definidas en el objeto padre, donde esta creado el estado con el array de tareas.
    Se pasan al objeto hijo por prop y se vinculan a eventos definidos por HTML (NO inventados, los de arriba SÍ me los he inventado yo como prop): onChange, onClick
*/
function Task({tarea, onDelete, onCheck, onUpdate}){

    /* Variable de estado que almacena un valor booleano y dice si la tarea se está editando o no
    */
const [isEditing, setIsEditing] = useState(false)

let mostrarTarea;

// Si SÍ se está editando mostramos esto para la tarea
    if(isEditing){
        mostrarTarea = 
        // El onChange lo vinculamos a onUpdate que nos llega por prop,  llamada abajo línea de código 129-130
        // que a su vez llama a la línea de código 109 y modifica el estado de la variable de las tareas (definida en el padre)
        // El botón cambia el valor de la variable de estado isEditing a false por tanto re-renderiza el componente mostrando el else de este if
        <>
            <input value={tarea.descripcion} onChange={ e => onUpdate(tarea.id, e.target.value)} />
            <button onClick={() => setIsEditing(false)}>Actualizar</button>
        </>
// Si NO se está editando mostramos esto para la tarea
    }else{
        mostrarTarea = 
        // Operador ternario (?:) -> si el atributo completada de la tarea está a true muestra el p con el del, si no solo el p
        // El checkbox llama con onChange (evento HTML creado por el navegador) a la prop que nos llega del padre onCheck (prop que YO me he inventado), busca la llamada en
        // la línea de código 129-130 y esta llama a la función handleCheckbox de la línea 79
        // Lo mismo para el onDelete del botón Eliminar
        // El botón Editar cambia el estado de isEditing a true y muestra el jsx de arriba el del if
        <>
            {tarea.completada?<p style={{display:"inline"}}><del>{tarea.descripcion}</del></p>:<p style={{display:"inline"}} >{tarea.descripcion}</p>}
            <input type="checkbox" checked={tarea.completada} onChange={() => onCheck(tarea.id)} />
            <button onClick={() => onDelete(tarea.id)}>Eliminar</button>
            <button onClick={() => setIsEditing(true)}>Editar</button>
            
        </>
    }
 


    //muestro la variable que me acabo de crear como return de mi JSX
    return (<div >
        {mostrarTarea}
    </div>);
}


export default function TaskList(){

    
    const [tareasEstado, setTareasEstado] = useState(tareas);


    const [descripcionNueva, setDescripcionNueva] = useState("")
    

    function handleChangeCheckbox(tareaId){
        setTareasEstado(tareasEstado.map(tareaE => {
            if(tareaE.id === tareaId){
                return {...tareaE, completada: !tareaE.completada}
            }else{
                return tareaE
            }
        }))
    }

   
    function handleDelete(tareaId){
        setTareasEstado(tareasEstado.filter(tarea => tarea.id !== tareaId))
    }
    
   
    function handleCreate(e){
        e.preventDefault();
        setTareasEstado([...tareasEstado, {
            id: numId++,
            descripcion: descripcionNueva,
            completada: false
        }])
    }

  
    function creandoTarea(e){
        setDescripcionNueva(e.target.value)
    }

    function handleUpdate(tareaId, textoNuevo) {
        setTareasEstado(tareasEstado.map(tarea =>
            {
                if(tarea.id === tareaId){
                    return {...tarea, descripcion: textoNuevo}
                }else{
                    return tarea
                }
            }
        ))
    }



    
    return(
        //Iteración por el array pero ahora llamando al componente Task que me he creado
        //Me invento las props que me da la gana para pasar datos (la tarea) y funciones (controladores de evento)
    <div>
        {tareasEstado.map(tarea => 
            <Task key={tarea.id} tarea={tarea} onDelete={handleDelete} 
                    onCheck={handleChangeCheckbox} onUpdate={handleUpdate} /> 
        )}
        <form onSubmit={handleCreate}>
            <input type="text" onChange={creandoTarea} />
            <input type="submit" value="Crear" />
        </form>
    </div>);
}