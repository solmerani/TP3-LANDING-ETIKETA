
import "./QueHace.css";

function QueHace() {
  return (
    <section className="quehace">
      <h2>Todo lo que necesitas saber sobre tus productos</h2>
      <div className="quehace__cards">
        <div className="card">
          <span>📷</span>
          <p>Escaneo instantáneo</p>
        </div>
        <div className="card">
          <span>🔔</span>
          <p>Alertas claras</p>
        </div>
        <div className="card">
          <span>❤️</span>
          <p>Alternativas sanas</p>
        </div>
      </div>
    </section>
  );
}

export default QueHace;
