import React, { useState, useEffect } from "react";
import { imagesHero } from "../assets/data/images";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

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
      <section className="hero-section">
        <h1>Tu estilo nuestra firma</h1>
        <img
          src={imagesHero[currentIndex]}
          alt=""
          className={`hero-image ${isFading ? "fade-out" : "fade-in"}`}
        />
        <div className="hero-actions">
          <button>Agendar cita</button>
          <button>Contactanos</button>
        </div>
      </section>
    </div>
  );
}
