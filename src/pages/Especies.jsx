import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'; // Ajusta la ruta si es necesario

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
          url = data.next;
        }

        setEspecies(allSpecies);
        guardarEspeciesEnSupabase(allSpecies);
      } catch (error) {
        console.error("Error cargando especies:", error);
      } finally {
        setLoading(false);
      }
    };

    const guardarEspeciesEnSupabase = async (especiesLista) => {
      for (const esp of especiesLista) {
        const { data: existente, error: errorCheck } = await supabase
          .from('especies')
          .select('id')
          .eq('nombre', esp.name)
          .maybeSingle();

        if (errorCheck) {
          console.error("Error comprobando especie:", esp.name, errorCheck.message);
          continue;
        }

        if (!existente) {
          const { error } = await supabase.from('especies').insert([{
            nombre: esp.name,
            clasificacion: esp.classification,
            designacion: esp.designation,
            altura_promedio: esp.average_height,
            esperanza_vida: esp.average_lifespan,
            color_piel: esp.skin_colors,
            color_cabello: esp.hair_colors,
            color_ojos: esp.eye_colors,
            lenguaje: esp.language,
            planeta_origen: esp.homeworld || null
          }]);

          if (error) {
            console.error("Error guardando especie:", esp.name, error.message);
          }
        }
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
