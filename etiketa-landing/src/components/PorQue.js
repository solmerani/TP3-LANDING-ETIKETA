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

  const testimonials = [
    {
      text: "“Es estupenda, práctica, perfecta y funcional. Me encanta esta aplicación. Nos permite usar productos naturales y saludables.”",
      author: "- Juan",
    },
    {
      text: "“Excelente app, muy fácil de usar y con información muy útil.”",
      author: "- Sofía",
    },
    {
      text: "“Desde que la uso, elijo mucho mejor mis productos. ¡La recomiendo!”",
      author: "- Martín",
    },
  ];

  const [visibleItems, setVisibleItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [rotate, setRotate] = useState(false);

  // ✅ Animación de aparición de los ítems uno a uno
  useEffect(() => {
    let timeout;
    const showItems = () => {
      if (currentIndex < items.length) {
        setVisibleItems((prev) => [...prev, items[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
        timeout = setTimeout(showItems, 1500); // aparece cada 1.5s
      } else {
        timeout = setTimeout(() => {
          setVisibleItems([]);
          setCurrentIndex(0);
          showItems();
        }, 8000); // espera 8s y reinicia el ciclo
      }
    };

    showItems();
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  // 🔁 Cambio automático de reseña con rotación suave
  useEffect(() => {
    const interval = setInterval(() => {
      setRotate(true);
      setTimeout(() => {
        setReviewIndex((prev) => (prev + 1) % testimonials.length);
        setRotate(false);
      }, 1000); // coincide con la duración del giro
    }, 6000); // cada 6s cambia la reseña
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentReview = testimonials[reviewIndex];

  return (
    <section className="porque">
      <h2>¿Por qué elegir Etiketa?</h2>

      <div className="porque__content">
        {/* LISTA DE CHECKS */}
        <ul className="porque__list">
          {visibleItems.map((text, i) => (
            <li key={i} style={{ animationDelay: `${i * 0.3}s` }}>
              <img src={checkIcon} alt="check" />
              <span className="typewriter">{text}</span>
            </li>
          ))}
        </ul>

        {/* TESTIMONIO GIRATORIO */}
        <div className={`porque__testimonial ${rotate ? "rotate" : ""}`}>
          <p>{currentReview.text}</p>
          <span>{currentReview.author}</span>
        </div>
      </div>
    </section>
  );
};

export default PorQue;
