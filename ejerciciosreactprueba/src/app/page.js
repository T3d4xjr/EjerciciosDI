"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Ejercicio1 from"./Greeting";
import Ejercicio2 from"./Card";
import Ejercicio3 from"./Counter";
import Ejercicio4 from"./Product";
import Ejercicio5 from "./UserCard";
import Ejercicio6 from"./Parent";
import Ejercicio7 from "./ToggleSwitch";
import Ejercicio8 from "./ToDoList";
import Ejercicio9 from "./Counter2"
import Ejercicio10 from "./LoginControl";
import Ejercicio11 from "./ProductStock";
import Ejercicio12 from "./ContactForm";
import Ejercicio13 from "./ShoppingList";
import Ejercicio14 from "./Dropdown";
import Ejercicio15 from "./ImageGallery";

export default function Home() {
  return (
    <div>
      <h1>Ejercicio1</h1>
      <Ejercicio1 name ="Jose"/>
      <h1>Ejercicio2</h1>
      <Ejercicio2 titulo="Titulo" descripcion="esto es una descripcion" src="pikachu.jpeg"/>
      <h1>Ejercicio3</h1>
      <Ejercicio3/>
      <h1>Ejercicio4</h1>
      <Ejercicio4 nombre="nombre1" precio="100" descripcion="descrip ejerc4"/>
      <Ejercicio4 nombre="nombre2" precio="100" descripcion="descrip ejerc4"/>
      <Ejercicio4 nombre="nombre3" precio="100" descripcion="descrip ejerc4"/>
      <h1>Ejercicio5</h1>
      <Ejercicio5/>
      <h1>Ejercicio6</h1>
      <Ejercicio6/>
      <h1>Ejercicio7</h1>
      <Ejercicio7/>
      <h1>Ejercicio8</h1>
      <Ejercicio8/>
      <h1>Ejercicio9</h1>
      <Ejercicio9/>
      <h1>Ejercicio10</h1>
      <Ejercicio10/>
      <h1>Ejercicio11</h1>
      <Ejercicio11 inStock={false}/>
      <Ejercicio11 inStock={true}/>
      <h1>Ejercicio12</h1>
      <Ejercicio12/>
      <h1>Ejercicio13</h1>
      <Ejercicio13/>
      <h1>Ejercicio14</h1>
      <Ejercicio14/>
      <h1>Ejercicio15</h1>
      <Ejercicio15/>
    </div>
  );
}
