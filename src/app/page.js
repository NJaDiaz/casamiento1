"use client"; // Ensure this component is a client component

import './globals.css'
import { motion } from 'framer-motion';
import Contador from './components/Contador';
import Header from './components/Header';
import Cancion from './components/Cancion';
import Confirmacion from './components/Confirmacion';
import Footer from './components/Footer';
import AmorComp from './components/AmorComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  const weddingDate = '2025-02-22T21:00:00'; 
  const audioSrc = './el_tunel_de_la_vida.mp3';

  // Animation settings
  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.5 },
    viewport: { once: false }
  };

  return (
    <div className="font-[var(--font-geist-sans)] relative min-h-screen font-[family-name:var(--font-geist-sans)]">
      <motion.div 
      
        {...sectionAnimation} 
        className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20 text-center text-white grayscale-0"
        style={{ backgroundImage: "url('./img/manos.jpg')", backgroundSize: 'cover', backgroundPosition: 'center',  }}
      >
        
        <Header />
        <img src="./img/JYS.png" alt="Logo" className="w-auto mb-4" />
        <h1 className="text-6xl mb-6 font-bold">¡Te invitamos a nuestro casamiento!</h1>
        <div className="text-3xl mb-4">Solo faltan:</div>
        <Contador id="fecha" eventDate={weddingDate} />
        
      </motion.div>




      <motion.div 
      id="lugar"
  {...sectionAnimation} 
  className="relative z-10 text-center p-10 h-screen bg-[#34495e] bg-cover bg-center"
>
  <h2 className="text-4xl font-bold mt-10 mb-10">Lugar y horario del casamiento</h2>
  

  <div className="flex flex-col items-center mb-6">
  <h3 className="text-xl font-bold mb-1 flex items-center">
    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
    Restaurante Los Naples
  </h3>
  <div className="border-b border-white w-1/2 mb-1"></div> 
  <h3 className="text-xl font-bold mb-4 flex items-center">
    <FontAwesomeIcon icon={faClock} className="mr-2" />
    22 de Febrero - 21:00hs
  </h3>
</div>
  
 
  <div className="flex flex-col md:flex-row justify-between mt-16 w-full">
    <div className="w-full max-w-4xl mb-4 md:mb-0">
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26743.008281133385!2d-66.2885563612018!3d-33.08604579510947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d443e7ec3ccdc3%3A0xb8e970b79407f6a0!2sRestaurante%20Naples.!5e0!3m2!1ses!2sar!4v1727232544215!5m2!1ses!2sar"
          width="600"
          height="450"
          style={{
            border: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    
  
    <div className="flex flex-col justify-center items-center md:ml-9">
  <h3 className="text-4xl font-bold mb-2 p-8">¿Cómo llegar?</h3>
  <a 
    href="https://www.google.com/maps/dir/?api=1&destination=Restaurante+Los+Naples" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
  >
    Ver en Google Maps
  </a>
</div>
  </div>
</motion.div>




      

      

      <motion.div {...sectionAnimation} className="relative z-10 p-8 bg-[#fdebd0] bg-fixed">
        <AmorComp />
      </motion.div>

     
      <motion.div id="confirmacion" {...sectionAnimation} className="relative z-10 bg-[#34495e]">
        <Confirmacion />
      </motion.div>


      <motion.div {...sectionAnimation} className="p-8 bg-[#fdebd0]">
     <Footer />
       </motion.div>

       <Cancion audioSrc={audioSrc} />
       
    </div>
  );
}
