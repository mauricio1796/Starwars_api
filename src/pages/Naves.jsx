import React, { useEffect, useState } from 'react';
import './Cards.css';
import Filtros from '../Componentes/Filtros'; // Asegúrate de que la ruta sea correcta

function getIdFromUrl(url) {
  const parts = url.split('/');
  return parts[parts.length - 2];
}

function Naves() {
  const [naves, setNaves] = useState([]);
  const [verDetalles, setVerDetalles] = useState({});
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const fetchNaves = async () => {
      let url = 'https://swapi.py4e.com/api/starships/';
      let allNaves = [];
      
      while (url) {
        const res = await fetch(url);
        const data = await res.json();
        allNaves = [...allNaves, ...data.results];
        url = data.next; // Si hay más páginas, actualiza la URL
      }
      
      setNaves(allNaves);
    };
  
    fetchNaves();
  }, []);

  const toggleDetalles = (id) => {
    setVerDetalles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // 🔍 Filtro aplicado a nombre y modelo
  const navesFiltradas = naves.filter(n =>
    n.name.toLowerCase().includes(filtro.toLowerCase()) ||
    n.model.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Naves</h2>
      <Filtros value={filtro} onChange={setFiltro} placeholder="Buscar nave o modelo..." />
      <div className="grid">
        {navesFiltradas.map((n) => {
          const id = getIdFromUrl(n.url);
          const imgUrl = `/img/Naves/${id}.jpg`;
          const mostrarDetalles = verDetalles[id];

          return (
            <div key={id} className="card">
              {!mostrarDetalles ? (
                <div className="card-img-container">
                  <img src={imgUrl} alt={n.name} className="card-img" />
                  <button className="btn-overlay" onClick={() => toggleDetalles(id)}>Ver detalles</button>
                </div>
              ) : (
                <div className="card-details">
                  <p className="card-subtitle">Naves</p>
                  <h3>{n.name}</h3>
                  <p><strong>Modelo:</strong> {n.model}</p>
                  <p><strong>Fabricante:</strong> {n.manufacturer}</p>
                  <p><strong>Capacidad:</strong> {n.passengers} pasajeros</p>
                  <p><strong>Clase:</strong> {n.starship_class}</p>
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

export default Naves;
