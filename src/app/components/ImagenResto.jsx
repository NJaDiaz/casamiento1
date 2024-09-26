// components/Gallery.jsx
import React from 'react';
import LightGallery from 'react-lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

const images = [
  {
    src: '/img/image1.jpg', // Reemplaza con tus imágenes
    thumb: '/img/image1-thumb.jpg',
    subHtml: '<h4>Imagen 1</h4>',
  },
  {
    src: '/img/image2.jpg',
    thumb: '/img/image2-thumb.jpg',
    subHtml: '<h4>Imagen 2</h4>',
  },
  {
    src: '/img/image3.jpg',
    thumb: '/img/image3-thumb.jpg',
    subHtml: '<h4>Imagen 3</h4>',
  },
  // Agrega más imágenes según sea necesario
];

const Gallery = () => {
  return (
    <LightGallery>
      {images.map((image, index) => (
        <a key={index} data-sub-html={image.subHtml} href={image.src}>
          <img src={image.thumb} alt={`Imagen ${index + 1}`} />
        </a>
      ))}
    </LightGallery>
  );
};

export default Gallery;
