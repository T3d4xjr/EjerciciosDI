export default function UserCard(){
    const objetos =[
        {
         name:"nombre1",
         descripcion:"descripcion"
        },
        {
         name:"nombre1",
         descripcion:"descripcion"
        }
    ]
    const listaobjetos =objetos.map((objeto,index) =>(
        <li key={index}>
           <p>{objeto.name}</p> 
           <p>{objeto.descripcion}</p> 

        </li>
         ))
    return(
        <div>
            {listaobjetos}
    
        </div>
        
    );
}