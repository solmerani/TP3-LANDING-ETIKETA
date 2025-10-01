import { useEffect, useState } from "react";
import "./PorQue.css";
import checkIcon from "../assets/check.png";

const PorQue = () => {
  const items = [
    "Base de datos completa",
    "Precisión verificada",
    "Personalización inteligente",
    "Interfaz intuitiva",
  ];

  const [visibleItems, setVisibleItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    const showItems = () => {
      if (currentIndex < items.length) {
        setVisibleItems((prev) => [...prev, items[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
        timeout = setTimeout(showItems, 2000); // cada 2s aparece uno
      } else {
        // Espera 8s y reinicia todo
        timeout = setTimeout(() => {
          setVisibleItems([]);
          setCurrentIndex(0);
          showItems();
        }, 8000);
      }
    };

    showItems();

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section className="porque">
      <h2>¿Por qué elegir Etiketa?</h2>

      <div className="porque__content">
        {/* Lista con animación de typewriter */}
        <ul className="porque__list">
          {visibleItems.map((text, i) => (
            <li key={i}>
              <img src={checkIcon} alt="check" />
              <span className="typewriter">{text}</span>
            </li>
          ))}
        </ul>

        {/* Globo giratorio */}
        <div className="porque__testimonial spin">
          <p>
            “Es estupenda, práctica, perfecta y funcional. Me encanta esta
            aplicación. Nos permite utilizar productos naturales, saludables y
            equilibrados.”
          </p>
          <span>- Juan</span>
        </div>
      </div>
    </section>
  );
};

export default PorQue;
