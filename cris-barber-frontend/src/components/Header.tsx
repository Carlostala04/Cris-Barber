import React from "react";
import "../styles/header.css";
export default function Header() {
  return (
    <header className="header">
      <ul>
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#conocenos">Conocenos</a>
        </li>
        <li>
          <a href="">Contactanos</a>
        </li>
        <li>
          <a href="">Agenda tu cita</a>
        </li>
      </ul>
    </header>
  );
}
