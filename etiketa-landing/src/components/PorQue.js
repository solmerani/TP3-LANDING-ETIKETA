
import "./PorQue.css";
import checkIcon from "../assets/check.png"; // 👈 importa la imagen desde src

const PorQue = () => {
  return (
    <section className="porque">
      <h2>¿Por qué elegir Etiketa?</h2>

      <div className="porque__content">
        {/* Lista izquierda */}
        <ul className="porque__list">
          <li>
            <img src={checkIcon} alt="check" />
            <span>Base de datos completa</span>
          </li>
          <li>
            <img src={checkIcon} alt="check" />
            <span>Precisión verificada</span>
          </li>
          <li>
            <img src={checkIcon} alt="check" />
            <span>Personalización inteligente</span>
          </li>
          <li>
            <img src={checkIcon} alt="check" />
            <span>Interfaz intuitiva</span>
          </li>
        </ul>

        {/* Globo derecha */}
        <div className="porque__testimonial">
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
