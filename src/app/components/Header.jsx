import React from 'react';

const Header = () => {
  return (
    <header className="z-20 bg-transparent text-white py-4 ">
      <div className="container mx-auto flex flex-col items-center">
        <nav className="space-x-4 mb-2">
          <a href="#fecha" className="hover:underline">
            Fecha
          </a>
          <a href="#lugar" className="hover:underline">
            Lugar
          </a>
          <a href="#confirmacion" className="hover:underline">
            Confirmación
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
