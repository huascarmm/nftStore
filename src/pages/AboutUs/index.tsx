import React, { ReactNode } from 'react';

interface AboutProps {
  children?: ReactNode;
  // Define aquí tus props adicionales con sus tipos
  // ejemplo: title?: string;
}

const AboutUs = ({ children }: AboutProps) => {
  return (
    <div className="container-class">
      {/* Contenido del componente */}
      {children}
    </div>
  );
};

export default AboutUs;