import React from "react";
import "../styles/card-team.css";
interface teamCardProps {
  nombre: string;
  descripcion: string;
  ocupacion: string;
  imagen: string;
}
export default function TeamCard({
  nombre,
  descripcion,
  ocupacion,
  imagen,
}: teamCardProps) {
  return (
    <article className="card">
      <div className="img-container">
        <img src={imagen} alt="imagen de equipo" />
      </div>
      <div className="card-body">
        <h3>{nombre}</h3>
        <h4>{descripcion}</h4>
        <h4>{ocupacion}</h4>
      </div>
    </article>
  );
}
