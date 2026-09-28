import React, { useState } from "react";
import Leave from "../assets/icons/arrow";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/appoinment.css"; // este archivo
import { Link } from "react-router-dom";

interface AppointmentProps {
  onDateSelected: (date: Date | null) => void;
}
export default function Appointment({ onDateSelected }: AppointmentProps) {
  const servicios = [
  {
    nombre: "Corte clásico",
    descripcion: "Corte tradicional personalizado según el estilo del cliente.",
    precio: 5000
  },
  {
    nombre: "Fade",
    descripcion: "Degradado moderno y preciso adaptado a la forma del rostro.",
    precio: 6000
  },
  {
    nombre: "Corte + Barba",
    descripcion: "Corte de cabello acompañado de perfilado y arreglo de barba.",
    precio: 8000
  },
  {
    nombre: "Barba",
    descripcion: "Perfilado, recorte y acabado de barba para un look definido.",
    precio: 4000
  },
  {
    nombre: "Corte infantil",
    descripcion: "Corte de cabello para niños, cómodo y adaptado a su estilo.",
    precio: 4500
  },
  {
    nombre: "Diseño de cejas",
    descripcion: "Perfilado de cejas para complementar el estilo del cliente.",
    precio: 2500
  },
  {
    nombre: "Afeitado clásico",
    descripcion: "Afeitado tradicional con acabado limpio y cuidado de la piel.",
    precio: 4500
  },
  {
    nombre: "Corte premium",
    descripcion: "Corte completo con lavado, peinado y acabado profesional.",
    precio: 9000
  }
];
  const [fecha, setFecha] = useState<Date | null>(null);
  const handleChange = (date: Date | null) => {
    setFecha(date);
    onDateSelected?.(date);
  };
  return (
    <div className="appointment">
      <header className="appointment-header">
        <Link to={"/"}>
          Volver <Leave />
        </Link>
      </header>
      <form action="submit">
        <fieldset>
          <legend className="user-section-title">
            <h2>Tus datos</h2>
          </legend>
          <label>Ingresa tu correo</label>
          <input type="email" placeholder="ejemplo@gmail.com" />

          <div className="fila">
            <div>
              <label htmlFor="">Escoge una fecha</label>
              <DatePicker
                selected={fecha}
                onChange={handleChange}
                locale={"es"}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                filterDate={(date) => date.getDay() !== 0}
                placeholderText="Selecciona una fecha"
                className="input-fecha"
              />
            </div>
            <div>
              <label htmlFor="">Hora</label>
              <select id="select-time">
                <option value="">Selecciona una hora</option>
              </select>
            </div>
          </div>
          <select id="select-barber">
            <option value="">Selecciona tu barbero</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Escoge el servivcio que desea</h2>
          </legend>
          <select id="select-service">
            <option value="">Selecciona el servicio</option>
           {servicios.map((servicio)=>(
            <option value="">{servicio.nombre} - {servicio.precio}</option>
           ))}
          </select>
        </fieldset>
      </form>
    </div>
  );
}
