import "./ComoHace.css";
import paso1 from "../assets/Vector.png"; 
import paso2 from "../assets/lupa.png"; 
import paso3 from "../assets/verificado.png";
import flecha from "../assets/flecha.png"; 

function ComoHace() {
  return (
    <section className="comohace">
      <div className="comohace__steps">
        {/* Paso 1 */}
        <div className="step">
          <div className="icon-container">
            <img src={paso1} alt="Paso 1" className="icon" />
            <span className="number">1</span>
          </div>
          <h3>Escaneá en un click</h3>
          <p>Simplemente apunta tu cámara al código de barras del producto</p>
        </div>

        <img src={flecha} alt="Flecha" className="arrow" />

        {/* Paso 2 */}
        <div className="step">
          <div className="icon-container">
            <img src={paso2} alt="Paso 2" className="icon" />
            <span className="number">2</span>
          </div>
          <h3>Procesamos la información por ti</h3>
          <p>Nuestra IA analiza ingredientes y evalúa la seguridad del producto</p>
        </div>

        <img src={flecha} alt="Flecha" className="arrow" />

        {/* Paso 3 */}
        <div className="step">
          <div className="icon-container">
            <img src={paso3} alt="Paso 3" className="icon" />
            <span className="number">3</span>
          </div>
          <h3>Elige con confianza</h3>
          <p>Recibe detalles sobre ingredientes, beneficios y recomendaciones</p>
        </div>
      </div>
    </section>
  );
}

export default ComoHace;
