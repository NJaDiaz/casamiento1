"use client";

import React, { useState } from 'react';

const ConfirmationForm = () => {
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [name, setName] = useState('');
  const [namesList, setNamesList] = useState([]);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', namesList.join(', '));
    formData.append('adults', adults);
    formData.append('children', children);
    
    // Envía los datos al endpoint de FormSubmit
    fetch('https://formsubmit.co/casamiento.jys.1@gmail.com', {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
      if (response.ok) {
        setMessage('¡Confirmación enviada correctamente!');
        // Limpia los campos después del envío
        setAdults('');
        setChildren('');
        setNamesList([]);
        setName('');
      } else {
        throw new Error('Error en el envío del formulario.');
      }
    })
    .catch((error) => {
      console.error('Error al enviar el formulario:', error);
      setMessage('Error al enviar la confirmación. Inténtalo de nuevo.');
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && name.trim() !== '') {
      setNamesList([...namesList, name]);
      setName('');
    }
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/originals/ca/15/f3/ca15f33a6e9e667eeb6eaa46efd57317.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-between h-full p-8"> 
        <h2 className="text-4xl text-white max-w-xs p-2 mb-20 md:mb-0 md:p-0 md:mr-4">¡Queremos contar con tu presencia!</h2>

        <form onSubmit={handleSubmit} className="bg-transparent p-6 rounded-lg shadow-lg md:w-2/4 w-full "> 
          <h2 className="text-3xl mb-2 text-white text-center">Confirmación de Asistencia</h2> 
          
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="name">Nombre de los integrantes</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress} 
              className="border border-gray-300 p-2 rounded w-full text-gray-400"
              placeholder="Escribe un nombre y presiona Enter"
            />
            <ul className="mt-2 text-white">
              {namesList.map((n, index) => (
                <li key={index} className="mb-1">• {n}</li> 
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="adults">Adultos confirmados</label>
            <input
              type="number"
              id="adults"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full text-gray-400"
              required
              min="0"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="children">Niños confirmados (o NO)</label>
            <input
              type="text"
              id="children"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full text-gray-400"
              placeholder="Número o 'No'"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">Enviar</button>
          {message && <p className="mt-4 text-green-500 text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default ConfirmationForm;
