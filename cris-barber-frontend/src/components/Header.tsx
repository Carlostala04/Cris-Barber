import React from "react";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
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
          <a href="#contactanos">Contactanos</a>
        </li>
        <li>
          <a href="" onClick={() => navigate("/cita")}>
            Agenda tu cita
          </a>
        </li>
      </ul>
    </header>
  );
}
