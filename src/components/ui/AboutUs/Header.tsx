import React, { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
  // Define aquí tus props adicionales con sus tipos
  // ejemplo: title?: string;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="container-class">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
        </div> 
        <div id="item2" className="carousel-item w-full">
          <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
        </div> 
        <div id="item3" className="carousel-item w-full">
          <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
        </div> 
        <div id="item4" className="carousel-item w-full">
          <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
        </div>
      </div> 
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a> 
        <a href="#item2" className="btn btn-xs">2</a> 
        <a href="#item3" className="btn btn-xs">3</a> 
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
  );
};

export default Header;
