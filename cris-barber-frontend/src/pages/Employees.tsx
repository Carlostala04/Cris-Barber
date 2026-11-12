import React, { useState } from "react";
import "../styles/employee.css";
import Table from "../components/Table";
import { mockAppointments } from "../mock/appointment.mock";
export default function Employees() {
  const [isHorarios, setIsHorarios] = useState(true);

  const handleToggle = () => {
    setIsHorarios((prev) => !prev);
  };
  const horarios = [
    // { id: 1, dia: "Lunes", cupos: 8 },
    // { id: 2, dia: "Martes", cupos: 8 },
    // { id: 3, dia: "Miércoles", cupos: 8 },
    // { id: 4, dia: "Jueves", cupos: 8 },
    // { id: 5, dia: "Viernes", cupos: 8 },
    // { id: 6, dia: "Sábado", cupos: 5 },
  ];
  const toggleClass = isHorarios ? "" : "back-toggle-citas";
  const activitySectionClass = isHorarios ? "schedule" : "appointment";
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
      <section className={`activity-section ${activitySectionClass}`}>
        {activitySectionClass === "schedule" && (
          <div className="schedule-container">
            <h2>Horarios</h2>
            {horarios.length === 0 && (
              <div className="advice">
                <h2>No hay horarios disponibles</h2>
                <button>Agregar horario</button>
              </div>
            )}
          </div>
        )}
        {activitySectionClass === "appointment" && (
          <div className="appointment-container">
            <h2>Citas</h2>
            <Table
              columns={[
                { header: "Usuario", key: "id_user" },
                { header: "Servicio", key: "id_service" },
                {
                  header: "Fecha",
                  render: (row) =>
                    new Date(row.date).toLocaleDateString("es-CR"),
                },
                { header: "Estado", key: "status" },
              ]}
              data={mockAppointments}
              onAction={() => console.log("Hola")}
              rowKey={(row) => row.id}
            />
          </div>
        )}
      </section>
    </div>
  );
}
