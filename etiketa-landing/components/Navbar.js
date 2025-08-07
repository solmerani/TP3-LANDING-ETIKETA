import './Navbar.css'; // opcional si querés separar los estilos

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/logo.png" alt="Logo" />
        <span>Etiketa</span>
      </div>
      <div className="navbar__links">
        <a href="#">Cómo funciona</a>
        <a href="#">Descargar</a>
      </div>
    </nav>
  );
}

export default Navbar;
