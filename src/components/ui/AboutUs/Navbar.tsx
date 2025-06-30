import React, { ReactNode } from 'react';

interface NavbarProps {
  children?: ReactNode;
  // Define aquí tus props adicionales con sus tipos
  // ejemplo: title?: string;
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <div className="container-class">
      {/* Contenido del componente */}
      {children}
    </div>
  );
};

export default Navbar;