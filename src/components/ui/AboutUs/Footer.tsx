import React, { ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
  // Define aquí tus props adicionales con sus tipos
  // ejemplo: title?: string;
}

const Footer = ({ children }: FooterProps) => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <span className="footer-title">Servicios</span> 
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Diseño</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Desarrollo</a>
      </div> 
      <div>
        <span className="footer-title">Empresa</span> 
        <a className="link link-hover">Sobre nosotros</a>
        <a className="link link-hover">Contacto</a>
        <a className="link link-hover">Trabajos</a>
      </div>
      <div>
        <span className="footer-title">Legal</span> 
        <a className="link link-hover">Términos de uso</a>
        <a className="link link-hover">Política de privacidad</a>
        <a className="link link-hover">Política de cookies</a>
      </div>
    </footer>
  );
};

export default Footer;