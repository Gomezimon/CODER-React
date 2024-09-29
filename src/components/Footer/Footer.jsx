import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} T-Shirt 10 | Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><a href="/about">Sobre Nosotros</a></li>
          <li><a href="/contact">Contacto</a></li>
          <li><a href="/privacy">Política de Privacidad</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;