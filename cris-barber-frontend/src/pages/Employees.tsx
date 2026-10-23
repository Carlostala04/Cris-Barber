import React, { useState } from "react";
import "../styles/employee.css";
export default function Employees() {
  const [isHorarios, setIsHorarios] = useState(true);

  const handleToggle = () => {
    setIsHorarios((prev) => !prev);
  };
  const horarios = [
    { id: 1, dia: "Lunes", cupos: 8 },
    { id: 2, dia: "Martes", cupos: 8 },
    { id: 3, dia: "Miércoles", cupos: 8 },
    { id: 4, dia: "Jueves", cupos: 8 },
    { id: 5, dia: "Viernes", cupos: 8 },
    { id: 6, dia: "Sábado", cupos: 5 },
  ];
  const toggleClass = isHorarios ? "" : "back-toggle-citas";
  return (
    <div className="employees-container">
      <h1>Bienvenido al panel de empleado</h1>
      <div className="toggle-button-container">
        <div onClick={handleToggle} className="toggle-button">
          <p>Horarios</p>
          <p>Citas</p>
          <span className={`back-toggle ${toggleClass}`}></span>
        </div>
      </div>
      <section className={`activity-section ${isHorarios}`}>
        {horarios === null && (
          <>
            <h2>No hay horarios para esta semana</h2>
            <button>Agregar horario</button>
          </>
        )}
      </section>
    </div>
  );
}
