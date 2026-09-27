import React, { useState } from "react";
import Leave from "../assets/icons/arrow";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/appoinment.css"; // este archivo
import { Link, useNavigate } from "react-router-dom";

interface AppointmentProps {
  onDateSelected: (date: Date | null) => void;
}
export default function Appointment({ onDateSelected }: AppointmentProps) {
  const navegate = useNavigate();
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
              <select name="" id="">
                <option value="">Selecciona una hora</option>
              </select>
            </div>
          </div>
          <select name="" id="">
            <option value="">Selecciona tu barbero</option>
          </select>
        </fieldset>
      </form>
    </div>
  );
}
