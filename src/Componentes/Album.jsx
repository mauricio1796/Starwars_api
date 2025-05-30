// src/Componentes/Album/index.jsx
import React, { useEffect, useState } from 'react';
import "../pages/Cards.css";

const Album = () => {
  const [capturados, setCapturados] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("capturadosStarWars")) || [];
    setCapturados(data);
  }, []);

  const borrarTodos = () => {
    if (window.confirm("¿Estás seguro de eliminar todo el álbum?")) {
      localStorage.removeItem("capturadosStarWars");
      setCapturados([]);
    }
  };

  return (
    <div className="container">
      <h1 style={{ marginBottom: '2rem' }}>Álbum del Universo</h1>
      <button 
        onClick={borrarTodos}
        style={{
          marginBottom: '2rem',
          background: '#cc0000',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Eliminar todo 🗑️
      </button>
      <div className="grid">
        {capturados.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-details">
              <h3>{item.nombre}</h3>
              <p className="card-subtitle">{item.resumen}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;
