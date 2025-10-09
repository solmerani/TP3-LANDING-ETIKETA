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
        <h2 className="fade-in-up">
          Descarga <span className="highlight">Etiketa</span> hoy mismo.
        </h2>
        <p className="fade-in-up delay-1">
          Únete a miles de usuarios que ya toman decisiones más informadas sobre
          sus productos de higiene.
        </p>

        <div className="footer__stores fade-in-up delay-2">
          <img src={appstore} alt="App Store" className="store-btn glow" />
          <img src={googleplay} alt="Google Play" className="store-btn glow" />
        </div>

        <img
          src={logo}
          alt="Logo Etiketa"
          className="footer__logo fade-in-up delay-3 spin-slow"
        />
      </div>
    </footer>
  );
};

export default Footer;
