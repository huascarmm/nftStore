import React, { ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
  // Define aquí tus props adicionales con sus tipos
  // ejemplo: title?: string;
}

const Footer = ({ children }: FooterProps) => {
  return (
    <div className="container-class">
      {/* Contenido del componente */}
      {children}
    </div>
  );
};

export default Footer;