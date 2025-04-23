import React, { useEffect, useState } from 'react';
import './Cards.css';
import Filtros from '../Componentes/Filtros'; // Ajusta esta ruta si cambia

function getIdFromUrl(url) {
  const parts = url.split('/');
  return parts[parts.length - 2];
}

function Planetas() {
  const [planetas, setPlanetas] = useState([]);
  const [verDetalles, setVerDetalles] = useState({});
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const fetchPlanetas = async () => {
      let url = 'https://swapi.py4e.com/api/planets/';
      let allPlanets = [];
      
      while (url) {
        const res = await fetch(url);
        const data = await res.json();
        allPlanets = [...allPlanets, ...data.results];
        url = data.next; // Se actualiza la URL con la siguiente página, si existe
      }
      
      setPlanetas(allPlanets);
    };
  
    fetchPlanetas();
  }, []);

  const toggleDetalles = (id) => {
    setVerDetalles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const planetasFiltrados = planetas.filter((p) =>
    p.name.toLowerCase().includes(filtro.toLowerCase()) ||
    p.climate.toLowerCase().includes(filtro.toLowerCase()) ||
    p.terrain.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Planetas</h2>
      <Filtros value={filtro} onChange={setFiltro} placeholder="Buscar por nombre, clima o terreno..." />
      <div className="grid">
        {planetasFiltrados.map((p) => {
          const id = getIdFromUrl(p.url);
          const imgUrl = `/img/planetas/${id}.jpg`;
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
                  <p className="card-subtitle">Planeta</p>
                  <h3>{p.name}</h3>
                  <p><strong>Clima:</strong> {p.climate}</p>
                  <p><strong>Terreno:</strong> {p.terrain}</p>
                  <p><strong>Población:</strong> {p.population}</p>
                  <p><strong>Gravedad:</strong> {p.gravity}</p>
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

export default Planetas;
