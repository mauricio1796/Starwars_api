import React, { useEffect, useState } from 'react';
import "../../pages/Cards.css";

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("favoritosStarWars")) || [];
    setFavoritos(guardados);
  }, []);

  const borrarFavoritos = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar todos los favoritos?")) {
      localStorage.removeItem("favoritosStarWars");
      setFavoritos([]);
    }
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Favoritos del Universo</h1>
        <button
          onClick={borrarFavoritos}
          style={{
            backgroundColor: '#cc0000',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Eliminar todos
        </button>
      </div>

      <div className="grid">
        {favoritos.map((item, index) => (
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

export default Favoritos;

