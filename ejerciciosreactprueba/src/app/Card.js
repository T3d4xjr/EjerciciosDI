export default function Card({titulo,descripcion,src}){
    return(
        <div className="Card">
            <h1>{titulo}</h1>
            <p>Descripcion:{descripcion}</p>
            <img src={src}></img>
        </div>
        
    );
}