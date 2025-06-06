import React, { useEffect, useState } from 'react';
import './Cards.css';
import Filtros from '../Componentes/Filtros';
import { supabase } from '../supabaseClient';

function getIdFromUrl(url) {
  const parts = url.split('/');
  return parts[parts.length - 2];
}

function Vehiculos() {
  const [vehiculos, setVehiculos] = useState([]);
  const [verDetalles, setVerDetalles] = useState({});
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const fetchVehiculos = async () => {
      let url = 'https://swapi.py4e.com/api/vehicles/';
      let allVehicles = [];

      try {
        while (url) {
          const res = await fetch(url);
          const data = await res.json();
          allVehicles = [...allVehicles, ...data.results];
          url = data.next;
        }

        setVehiculos(allVehicles);

        for (const v of allVehicles) {
          if (!v.name) continue;

          const { data: existe } = await supabase
            .from('vehiculos')
            .select('id')
            .eq('nombre', v.name)
            .maybeSingle();

          if (!existe) {
            const { error } = await supabase.from('vehiculos').insert([{
              nombre: v.name,
              modelo: v.model,
              fabricante: v.manufacturer,
              costo: String(v.cost_in_credits),
              longitud: String(v.length),
              velocidad: String(v.max_atmosphering_speed),
              tripulacion: v.crew,
              pasajeros: v.passengers,
              clase_vehiculo: v.vehicle_class
            }]);

            if (error) {
              console.error(`Error guardando vehículo "${v.name}":`, error.message);
            }
          }
        }
      } catch (error) {
        console.error("Error al cargar o guardar vehículos:", error);
      }
    };

    fetchVehiculos();
  }, []);

  const toggleDetalles = (id) => {
    setVerDetalles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const vehiculosFiltrados = vehiculos.filter((v) =>
    v.name.toLowerCase().includes(filtro.toLowerCase()) ||
    v.model.toLowerCase().includes(filtro.toLowerCase()) ||
    v.manufacturer.toLowerCase().includes(filtro.toLowerCase()) ||
    v.vehicle_class.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Vehículos</h2>
      <Filtros
        value={filtro}
        onChange={setFiltro}
        placeholder="Buscar por nombre, modelo, fabricante o clase..."
      />
      <div className="grid">
        {vehiculosFiltrados.map((v) => {
          const id = getIdFromUrl(v.url);
          const imgUrl = `/img/Vehiculos/${id}.jpg`;
          const mostrarDetalles = verDetalles[id];

          return (
            <div key={id} className="card">
              {!mostrarDetalles ? (
                <div className="card-img-container">
                  <img src={imgUrl} alt={v.name} className="card-img" />
                  <button className="btn-overlay" onClick={() => toggleDetalles(id)}>Ver detalles</button>
                </div>
              ) : (
                <div className="card-details">
                  <p className="card-subtitle">Vehículo</p>
                  <h3>{v.name}</h3>
                  <p><strong>Modelo:</strong> {v.model}</p>
                  <p><strong>Fabricante:</strong> {v.manufacturer}</p>
                  <p><strong>Pasajeros:</strong> {v.passengers}</p>
                  <p><strong>Clase:</strong> {v.vehicle_class}</p>
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

export default Vehiculos;
