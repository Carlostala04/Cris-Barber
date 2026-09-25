import React, { useState, useEffect } from "react";
import { imagesHero } from "../assets/data/images";
import "../styles/home.css";
import imagen from "../assets/imagenPrueba.png";
import TeamCard from "../components/teamCard";
import { Map } from "../assets/icons/mapa";
import Whatsapp from "../assets/icons/whatsapp";
import Phone from "../assets/icons/phone";
import Instagram from "../assets/icons/instagram";
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
      <section id="contactanos" className="contact-us">
        <h2 className="contact-us-title">Encuentranos</h2>
        <div className="find">
          <div className="location">
            <div className="location-description">
              <Map />
              <h3>Direccion: </h3>
              <p>9a. Calle NE, Nandaime, Nicaragua</p>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4836.763919829361!2d-86.05271072413109!3d11.76292564022204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7416d6f759e941%3A0xf9bfa93ab7e03b7d!2s9a.%20Calle%20NE%2C%20Nandaime%2C%20Nicaragua!5e1!3m2!1sen!2scr!4v1790224983912!5m2!1sen!2scr"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="schedule">
            <h3>Horarios</h3>
            <h4>Lunes - viernes</h4>
            <a href="">Agenda tu cita</a>
          </div>
        </div>
        <span className="separator"></span>
        <div className="contact">
          <h2>Contactanos</h2>
          <div className="icons-contact">
            <a id="whattsapp" data-info="Whattsapp" href="">
              <Whatsapp />
            </a>
            <a id="phone" data-info="(505) 77665431" href="">
              <Phone />
            </a>
            <a id="instagram" data-info="@CrisBarber" href="">
              <Instagram />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
