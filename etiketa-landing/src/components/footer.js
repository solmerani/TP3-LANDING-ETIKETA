import React from "react";
import "./footer.css";
import logo from "../assets/logofooter.png";
import appstore from "../assets/appstore.png";
import googleplay from "../assets/googleplay.png";
import wave from "../assets/wave.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="footer__wave"
        style={{ backgroundImage: `url(${wave})` }}
      ></div>

      <div className="footer__content">
        <h2>
          Descarga <span className="highlight">Etiketa</span> hoy mismo.
        </h2>
        <p>
          Únete a miles de usuarios que ya toman decisiones más informadas sobre
          sus productos de higiene
        </p>

        <div className="footer__stores">
          <img src={appstore} alt="App Store" className="store-btn" />
          <img src={googleplay} alt="Google Play" className="store-btn" />
        </div>

        <img src={logo} alt="Logo Etiketa" className="footer__logo" />
      </div>
    </footer>
  );
};

export default Footer;
