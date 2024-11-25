import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const [mensajeExito, setMensajeExito] = useState('');

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const { nombre, correo, mensaje } = formData;

    if (nombre && correo && mensaje) {
      setMensajeExito('¡Formulario enviado con éxito!');
      setFormData({ nombre: '', correo: '', mensaje: '' });
    } else {
      setMensajeExito('Por favor, completa todos los campos.');
    }
  };

  return (
    <div>
      <h1>Formulario de Contacto</h1>
      <form onSubmit={manejarEnvio}>
        <div>
            <p>Nombre</p>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={manejarCambio}
          />
        </div>
        <div>
        <p>correo</p>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={manejarCambio}
          />
        </div>
        <div>
        <p>mensaje</p>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={manejarCambio}
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {mensajeExito && <p>{mensajeExito}</p>}
    </div>
  );
}
