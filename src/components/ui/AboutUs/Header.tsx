import React, { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
  // Define aquí tus props adicionales con sus tipos
  // ejemplo: title?: string;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="container-class">
      {/* Contenido del componente */}
      {children}
    </div>
  );
};

export default Header;