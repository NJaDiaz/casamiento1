import React from 'react';
import '../globals.css';

const Footer = () => {
  const sabrinaNumber = "2665030217";
  const javierNumber = "2664617753";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#fdebd0] text-2xl text-gray-500 p-7 text-center h-auto relative">
      <p>Ante cualquier consulta no dudes en contactarte con nosotros a nuestro WhatsApp o llamándonos</p>
      <div className="mt-2 flex flex-col items-center md:flex-row md:justify-center">
        <a
          href={`https://wa.me/${sabrinaNumber}`}
          className="underline text-xl mx-2 mb-2 md:mb-0"
        >
          Sabrina: {sabrinaNumber}
        </a>
        <span className="mx-2">|</span>
        <a
          href={`https://wa.me/${javierNumber}`}
          className="underline text-xl mx-2 mb-2 md:mb-0"
        >
          Javier: {javierNumber}
        </a>
      </div>
 
      <button 
        onClick={scrollToTop} 
        className="absolute bottom-4 right-4 bg-slate-200 text-black rounded-full p-2 hover:bg-blue-700 transition duration-200"
        aria-label="Volver arriba"
      >
        &#8593; 
      </button>
    </footer>
  );
};

export default Footer;
