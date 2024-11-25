export default function Product({nombre,precio,descripcion}){
    return(
        <div>
            <h1>{nombre}</h1>
            <p>Precio:{precio}</p>
            <p>Descripcion:{descripcion}</p>
            
        </div>

    );
}