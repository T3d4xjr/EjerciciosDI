import { useState } from "react";

const opciones = [
  { id: 1, descripcion: "opcion1" },
  { id: 2, descripcion: "opcion2" },
  { id: 3, descripcion: "opcion3" },
];

export default function Dropdown() {
  const [seleccion, setSeleccion] = useState("");

  const manejarCambio = (e) => {
    setSeleccion(e.target.value);
  };

  return (
    <div>
      <h2>Menú Desplegable</h2>
      <select value={seleccion} onChange={manejarCambio}>
        <option value="" disabled>
          Selecciona una opción
        </option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.descripcion}>
            {opcion.descripcion}
          </option>
        ))}
      </select>
      {seleccion && <p>Opción seleccionada: {seleccion}</p>}
    </div>
  );
}
