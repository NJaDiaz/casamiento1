import React from 'react';
import '../globals.css';

const Footer = () => {
  const sabrinaNumber = "1231232133";
  const javierNumber = "1123123123";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazamiento suave hacia arriba
  };

  return (
    <footer className="bg-[#fdebd0] text-2xl text-gray-500 p-7 text-center h-40 relative">
      <p>Ante cualquier consulta no dudes en contactarte con nosotros a nuestro WhatsApp o llamándonos</p>
      <div className="mt-2">
        <a
          href={`https://wa.me/${sabrinaNumber}`}
          className="underline text-xl mx-2"
        >
          Sabrina: {sabrinaNumber}
        </a>
        |
        <a
          href={`https://wa.me/${javierNumber}`}
          className="underline text-xl mx-2"
        >
          Javier: {javierNumber}
        </a>
      </div>
      {/* Botón de flecha hacia arriba */}
      <button 
        onClick={scrollToTop} 
        className="absolute bottom-4 right-4 bg-slate-200 text-black rounded-full p-2 hover:bg-blue-700 transition duration-200"
        aria-label="Volver arriba"
      >
        &#8593; {/* Código HTML para la flecha hacia arriba */}
      </button>
    </footer>
  );
};

export default Footer;
