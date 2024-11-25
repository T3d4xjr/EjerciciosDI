"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Ejercicio1 from"./Greeting";
import Ejercicio2 from"./Card";

export default function Home() {
  return (
    <div>
      <h1>Ejercicio1</h1>
      <Ejercicio1 name ="Jose"/>
      <h1>Ejercicio2</h1>
      <Ejercicio2/>
    </div>
  );
}

