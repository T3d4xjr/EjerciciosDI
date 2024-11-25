//SOLUCIÓN EJERCICIO 8 BOLETÍN 1 CON LO QUE PIDE ÚNICAMENTE EL ENUNCIADO

import {useState} from 'react';

//Array de datos, cada elemento del array es un objeto tarea, con 3 atributos
//Van a ser las tareas que se muestren nada más cargar la página
// Atributos: id (identificador), descripción (texto de la tarea), completada (si se ha  marcado el chekbox o no)
const tareas = [
    {id:1,descripcion: "tarea1",completada:false},
    {id:2,descripcion: "tarea2",completada:false},
    {id:3,descripcion: "tarea3",completada:true}
]

//Variable acumuladora para ir insertando nuevas tareas en el array y vaya incrementando su valor
let numId = 4



//COMPONENTE REACT principal
export default function TaskList(){

    /*Variable de estado que almacena la lista de tareas. 
    FINALIDAD: cada vez que se modifique la lista (crear, eliminar o marcar check)
    solicita un nuevo renderizado para que se muestren los cambios
    */
    const [tareasEstado, setTareasEstado] = useState(tareas);



    /* Variable de estado que almacena los cambios en el input text de crear
    una nueva tarea, cada vez que se pulse una tecla, para después almacenarlo como
    un objeto nuevo de nuestro array original.
    */
    const [descripcionNueva, setDescripcionNueva] = useState("")
    

    /*Función que gestiona cuando se pulsa en la casilla de checkbox
    altera el valor del atributo 'completado' del objeto tarea del array del estado 
    */
    function handleChangeCheckbox(tareaId){
        setTareasEstado(tareasEstado.map(tareaE => {
            if(tareaE.id === tareaId){
                return {...tareaE, completada: !tareaE.completada}
            }else{
                return tareaE
            }
        }))
    }

    /*Función que elimina una tarea del array del estado
    */
    function handleDelete(tareaId){
        setTareasEstado(tareasEstado.filter(tarea => tarea.id !== tareaId))
    }
    

    /*Función que añade una tarea al array del estado, tomando como valor del atributo
    'descripcion' el contenido de la variable de estado 'descripcionNueva'
    */
    function handleCreate(e){
        e.preventDefault();
        setTareasEstado([...tareasEstado, {
            id: numId++,
            descripcion: descripcionNueva,
            completada: false
        }])
    }

    /*Función que modifica el valor de la variable de estado 'descripcionNueva' cuando
    escribo con el teclado, para después ser añadido a la tarea nueva.
    */
    function creandoTarea(e){
        setDescripcionNueva(e.target.value)
    }


    /*JSX que devuelve el componente.
        1º itera (bucle) todos los elementos del array del estado.Para cada uno de ellos:
            - lo muestra en un p (tachado si completado lo tiene a true),
            - añade un checkbox que si se pulsa llama a la funcion handleChangeCheckbox
            - añade un botón que si se pulsa llama a la función handleDelete
        2º Añade un formulario para crear una tarea nueva, gestionado por handleCreate
    */
    return(
    <div>
            {tareasEstado.map(tarea => 
        <div key={tarea.id}> 
            {tarea.completada?<p><del>{tarea.descripcion}</del></p>:<p>{tarea.descripcion}</p>}
            <input type="checkbox" checked={tarea.completada} onChange={() => handleChangeCheckbox(tarea.id)} />
            <button onClick={() => handleDelete(tarea.id)}>Eliminar</button>
        </div> )}
        <form onSubmit={handleCreate}>
            <input type="text" onChange={creandoTarea} />
            <input type="submit" value="Crear" />
        </form>
    </div>);
}