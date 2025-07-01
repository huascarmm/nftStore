import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">MiApp</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Inicio</a></li>
          <li><a>Productos</a></li>
          <li><a>Servicios</a></li>
          <li><a>Contacto</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;