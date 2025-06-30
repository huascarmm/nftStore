import React, { ReactNode } from 'react';

interface sectionProps {
  children?: ReactNode;
  // Define aquí tus props adicionales con sus tipos
  // ejemplo: title?: string;
}

const Section = ({ children }: sectionProps) => {
  return (
    <div className="container-class">
      {/* Contenido del componente */}
      {children}
    </div>
  );
};

export default Section;