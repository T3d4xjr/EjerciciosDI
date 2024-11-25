import React, { useState } from 'react';

function Hijo({ info, onMessage }) {
  return (
    <div className="hijo">
      <h2>Componente Hijo</h2>
      <p>Información desde el Padre: {info}</p>
      <button onClick={() => onMessage("Mensaje desde el Hijo")}>
        Enviar mensaje al Padre
      </button>
    </div>
  );
}

export default function Padre() {
  const [mensajeDelHijo, setMensajeDelHijo] = useState("");

  const manejarMensajeDelHijo = (mensaje) => {
    setMensajeDelHijo(mensaje);
  };

  return (
    <div className="padre">
      <h1>Componente Padre</h1>
      <p>Mensaje desde el Hijo: {mensajeDelHijo}</p>
      <Hijo 
        info="Esta es información desde el Padre" 
        onMessage={manejarMensajeDelHijo} 
      />
    </div>
  );
}
