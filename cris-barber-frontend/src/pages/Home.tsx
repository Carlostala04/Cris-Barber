import React, { useState, useEffect } from "react";
import { imagesHero } from "../assets/data/images";
import "../styles/home.css";
import imagen from "../assets/imagenPrueba.png"
import TeamCard from "../components/teamCard";
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const teamMembers = [
    {
      nombre: "Carlos Rodríguez",
      descripcion: "Especialista en diseño y desarrollo web",
      ocupacion: "Desarrollador Frontend",
      imagen: imagen,
    },
    {
      nombre: "María González",
      descripcion: "Experta en estrategias digitales y marketing",
      ocupacion: "Marketing Manager",
      imagen: imagen,
    },
    {
      nombre: "Andrés Vargas",
      descripcion: "Encargado de crear experiencias visuales atractivas",
      ocupacion: "Diseñador UI/UX",
      imagen: imagen,
    },
    {
      nombre: "Sofía Martínez",
      descripcion: "Especialista en gestión y coordinación de proyectos",
      ocupacion: "Project Manager",
      imagen: imagen,
    },
    {
      nombre: "Daniel Fernández",
      descripcion: "Desarrollador especializado en servidores y APIs",
      ocupacion: "Backend Developer",
      imagen: imagen,
    },
  ];
  useEffect(() => {
    const intervalMs = 3000;

    const intervalId = setInterval(() => {
      setIsFading(true); // inicia el fade-out

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesHero.length);
        setIsFading(false); // fade-in de la nueva imagen
      }, 500); // debe coincidir con la duración de la transición CSS
    }, intervalMs);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home">
      <section id="inicio" className="hero-section">
        <h1>Tu estilo nuestra firma</h1>
        <img
          src={imagesHero[currentIndex]}
          alt=""
          className={`hero-image ${isFading ? "fade-out" : "fade-in"}`}
        />
      </section>
      <section id="conocenos" className="team-section">
        <header className="team-section-header">
          <h3>
            <span className="line"></span>Equipo
          </h3>
          <div className="main-title">
            <h1>Conoce a nuestro equipo</h1>
            <p>
              Manos habilidosas, ojos agudos y años de experiencia detras de la
              silla
            </p>
          </div>
        </header>
        <div className="team-card">
          {teamMembers.map((team) => (
            <TeamCard
              nombre={team.nombre}
              descripcion={team.descripcion}
              ocupacion={team.ocupacion}
              imagen={team.imagen}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
