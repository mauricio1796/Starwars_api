import React, { useState, useEffect } from 'react';
import './style.css';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Llamada a la API de films
    fetch('https://swapi.py4e.com/api/films/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos de las películas');
        }
        return response.json();
      })
      .then(data => {
        setFilms(data.results); // Asignar los resultados de las películas
        setLoading(false); // Cambiar el estado de loading a false
      })
      .catch(err => {
        setError(err.message); // Capturar errores de la llamada
        setLoading(false);
      });
  }, []);

  return (
    <div className="films-container">
      <h2>Películas de Star Wars</h2>
      {loading && <p>Cargando...</p>}
      {error && <p className="error-text">{error}</p>}
      {!loading && !error && (
        <ul>
          {films.map((film) => (
            <li key={film.url}>
              <h3>{film.title}</h3>
              <p>{film.opening_crawl}</p>
              <p>Fecha de lanzamiento: {film.release_date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Films;
