import "./QueHace.css";
import scanIcon from "../assets/icons/scan.png";
import alertIcon from "../assets/icons/alert.png";
import heartIcon from "../assets/icons/heart.png";

function QueHace() {
  return (
    <section className="quehace">
      <h2>Todo lo que necesitas saber sobre tus productos</h2>
      <div className="quehace__cards">
        <div className="card">
          <img src={scanIcon} alt="Escaneo" className="icon" />
          <h3>Apunta y escanea</h3>
          <p>Simplemente apunta tu cámara al código de barras del producto</p>
        </div>
        <div className="card">
          <img src={alertIcon} alt="Análisis" className="icon" />
          <h3>Análisis instantáneo</h3>
          <p>Nuestra IA analiza ingredientes y evalúa la seguridad del producto</p>
        </div>
        <div className="card">
          <img src={heartIcon} alt="Información" className="icon" />
          <h3>Información completa</h3>
          <p>Recibe detalles sobre ingredientes, beneficios y recomendaciones</p>
        </div>
      </div>
      <p className="quehace__footer">
        Tu aliado práctico al momento de elegir productos, acompañándote en cada compra diaria
        para que decidas con confianza y sin complicaciones.
      </p>
    </section>
  );
}

export default QueHace;
