import React from 'react';
import "../../pages/Cards.css";

const personajesFavoritos = [
  {
    nombre: 'Luke Skywalker',
    imagen: '/img/Personajes/1.jpg',
    resumen: 'El héroe central de la trilogía original. Aparece en casi todas las películas clásicas.',
  },
  {
    nombre: 'Darth Vader',
    imagen: '/img/Personajes/4.jpg',
    resumen: 'Antagonista principal de la trilogía original. Su presencia es icónica en la saga.',
  },
  {
    nombre: 'Leia Organa',
    imagen: '/img/Personajes/5.jpg',
    resumen: 'Líder rebelde presente en todas las trilogías.',
  },
  {
    nombre: 'Han Solo',
    imagen: '/img/Personajes/14.jpg',
    resumen: 'Presente en la trilogía original y en "The Force Awakens".',
  },
  {
    nombre: 'R2-D2',
    imagen: '/img/Personajes/8.jpg',
    resumen: 'Uno de los pocos personajes que aparece en las 9 películas principales.',
  },
  {
    nombre: 'C-3PO',
    imagen: '/img/Personajes/9.jpg',
    resumen: 'Acompaña a R2-D2 a lo largo de toda la saga.',
  },
  {
    nombre: 'Yoda',
    imagen: '/img/Personajes/20.jpg',
    resumen: 'Consejero Jedi en la trilogía de precuelas y maestro en las originales.',
  },
  {
    nombre: 'Obi-Wan Kenobi',
    imagen: '/img/Personajes/6.jpg',
    resumen: 'Aparece en las tres trilogías como personaje joven y viejo.',
  },
  {
    nombre: 'Palpatine',
    imagen: '/img/Personajes/13.jpg',
    resumen: 'El verdadero villano de fondo en toda la saga Skywalker.',
  },
  {
    nombre: 'Chewbacca',
    imagen: '/img/Personajes/7.jpg',
    resumen: 'Compañero leal de Han Solo que aparece desde la trilogía original hasta la nueva.',
  },
];

const Favoritos = () => {
  return (
    <div className="container">
      <h1 style={{ marginBottom: '2rem' }}>Favoritos de la Saga</h1>
      <div className="grid">
        {personajesFavoritos.map((p, index) => (
          <div className="card" key={index}>
            <div className="card-img-container">
              <img src={p.imagen} alt={p.nombre} className="card-img" />
            </div>
            <div className="card-details">
              <h3>{p.nombre}</h3>
              <p className="card-subtitle">{p.resumen}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;
