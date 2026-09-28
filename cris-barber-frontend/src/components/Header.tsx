import React from "react";
import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";
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
          <a href="#contactanos">Contactanos</a>
        </li>
        <li>
          <Link to={"/cita"}>
          Agenda tu cita
          </Link>
        </li>
      </ul>
    </header>
  );
}
