import './Hero.css';
import iphone from '../assets/iphone.png';

function Hero() {
  return (
    <section className="hero">
      {/* Fondo con círculos animados */}
      <div className="hero-background">
        <div className="circle circle1 animate-pulse-smooth"></div>
        <div className="circle circle2 animate-pulse-smooth delay1"></div>
        <div className="circle circle3 animate-pulse-smooth delay2"></div>
        <div className="circle circle4 animate-pulse-smooth delay3"></div>
        <div className="circle circle5 animate-pulse-smooth delay4"></div>
        <div className="circle circle6 animate-pulse-smooth delay5"></div>
        <div className="circle circle7 animate-pulse-smooth delay6"></div>
        <div className="circle circle8 animate-pulse-smooth delay7"></div>
        <div className="circle circle9 animate-pulse-smooth delay8"></div>
        <div className="circle circle10 animate-pulse-smooth delay9"></div>
        <div className="circle circle11 animate-pulse-smooth delay10"></div>
        <div className="circle circle12 animate-pulse-smooth delay11"></div>
        <div className="circle circle13 animate-pulse-smooth delay12"></div>
        <div className="circle circle14 animate-pulse-smooth delay13"></div>
      </div>

      {/* Texto */}
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

      {/* Imagen */}
      <div className="hero__image">
        <img src={iphone} alt="Producto con código de barras" />
      </div>
    </section>
  );
}

export default Hero;
