function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1>
          Escaneá.<br />
          Descubrí.<br />
          <span className="highlight">Cuidate.</span>
        </h1>
        <p>
          Etiketa transforma cualquier código de barras en información útil: descubrí qué hay detrás de tus productos de higiene.
        </p>
      </div>
      <div className="hero__image">
        <img src="/cream.png" alt="Producto con código de barras" />
      </div>
    </section>
  );
}

export default Hero;
