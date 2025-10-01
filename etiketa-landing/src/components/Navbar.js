import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/logo.png" alt="Logo" />
        <span>Etiketa</span>
      </div>
      <div className="navbar__links">
        <a href="#como-funciona">Cómo funciona?</a>
        <a href="#footer">Descargar</a>
      </div>
    </nav>
  );
}

export default Navbar;