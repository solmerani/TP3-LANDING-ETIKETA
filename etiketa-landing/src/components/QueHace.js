
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
          <h3>Escaneo instantáneo</h3>
          <p>Escanea cualquier código de barras en segundos y obtén información instantánea</p>
        </div>
        <div className="card">
          <img src={alertIcon} alt="Alertas" className="icon" />
          <h3>Alertas claras</h3>
          <p>Recibe advertencias simples y entendibles sobre los ingredientes de tus productos</p>
        </div>
        <div className="card">
          <img src={heartIcon} alt="Alternativas" className="icon" />
          <h3>Alternativas sanas</h3>
          <p>Encuentra opciones más saludables según tus necesidades</p>
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
