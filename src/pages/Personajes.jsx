import React, { useEffect, useState } from 'react';
import './Cards.css';
import Filtros from '../Componentes/Filtros'; // Ajusta la ruta si es necesario

function getIdFromUrl(url) {
  const parts = url.split('/');
  return parts[parts.length - 2];
}

function Personajes() {
  const [personajes, setPersonajes] = useState([]);
  const [verDetalles, setVerDetalles] = useState({});
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const fetchPersonajes = async () => {
      let url = 'https://swapi.py4e.com/api/people/';
      let allPersonajes = [];
      
      while (url) {
        const res = await fetch(url);
        const data = await res.json();
        allPersonajes = [...allPersonajes, ...data.results];
        url = data.next; // Si hay más páginas, actualiza la URL
      }
      
      setPersonajes(allPersonajes);
    };
  
    fetchPersonajes();
  }, []);

  const toggleDetalles = (id) => {
    setVerDetalles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // 🔍 Filtra por nombre o género
  const personajesFiltrados = personajes.filter((p) =>
    p.name.toLowerCase().includes(filtro.toLowerCase()) ||
    p.gender.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Personajes</h2>
      <Filtros value={filtro} onChange={setFiltro} placeholder="Buscar por nombre o género..." />
      <div className="grid">
        {personajesFiltrados.map((p) => {
          const id = getIdFromUrl(p.url);
          const imgUrl = `/img/Personajes/${id}.jpg`;
          const mostrarDetalles = verDetalles[id];

          return (
            <div key={id} className="card">
              {!mostrarDetalles ? (
                <div className="card-img-container">
                  <img src={imgUrl} alt={p.name} className="card-img" />
                  <button className="btn-overlay" onClick={() => toggleDetalles(id)}>Ver detalles</button>
                </div>
              ) : (
                <div className="card-details">
                  <p className="card-subtitle">Personaje</p>
                  <h3>{p.name}</h3>
                  <p><strong>Altura:</strong> {p.height} cm</p>
                  <p><strong>Peso:</strong> {p.mass} kg</p>
                  <p><strong>Género:</strong> {p.gender}</p>
                  <button className="btn" onClick={() => toggleDetalles(id)}>Ocultar</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Personajes;
