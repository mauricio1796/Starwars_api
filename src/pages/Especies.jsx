import React, { useEffect, useState } from 'react';


const Especies = () => {
  const [especies, setEspecies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEspecies = async () => {
      let url = "https://swapi.py4e.com/api/species/";
      let allSpecies = [];

      try {
        while (url) {
          const res = await fetch(url);
          const data = await res.json();
          allSpecies = [...allSpecies, ...data.results];
          url = data.next; // si hay más páginas
        }
        setEspecies(allSpecies);
      } catch (error) {
        console.error("Error cargando especies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEspecies();
  }, []);

  if (loading) return <p>Cargando especies...</p>;

  return (
    <div className="container">
      <h2>Especies del Universo Star Wars</h2>
      <div className="grid">
        {especies.map((esp, index) => (
          <div className="card" key={index}>
            <div className="card-details">
              <h3>{esp.name}</h3>
              <p><strong>Clasificación:</strong> {esp.classification}</p>
              <p><strong>Altura promedio:</strong> {esp.average_height} cm</p>
              <p><strong>Esperanza de vida:</strong> {esp.average_lifespan}</p>
              <p><strong>Lenguaje:</strong> {esp.language}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Especies;
