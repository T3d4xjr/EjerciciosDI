
const imgs = [
  "pikachu.jpeg",
  "pikachu.jpeg",
    "pikachu.jpeg"
]

let indice = 0

function Image({url}){
    return (
        <div>
            <img src={url} />
        </div>
    );
}

export default function ImageGallery(){
    return (
        <div>
            {imgs.map((img) => <Image key={indice++} url={img} />)}
        </div>
    );

}