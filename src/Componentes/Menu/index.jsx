import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Menu = () => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  const toggleDetalle = () => {
    setMostrarDetalle(!mostrarDetalle);
  };

  return (
    <nav className="menu-container">
      <h2>Menú Principal</h2>
      <ul>
        <li>
          <Link to="/Aleatorios">Aleatorios</Link>
        </li>
        <li>
          <button className="menu-btn" onClick={toggleDetalle}>Detalles</button>
          {mostrarDetalle && (
            <ul className="submenu">
              <li><Link to="/Personajes">Personajes</Link></li>
              <li><Link to="/Naves">Naves</Link></li>
              <li><Link to="/Planetas">Planetas</Link></li>
              <li><Link to="/Vehiculos">Vehículos</Link></li>
              <li><Link to="/especies">Especies</Link></li>
             
            </ul>
          )}
        </li>
        <li><Link to="/Favoritos">Favoritos</Link></li>
        <li><Link to="/Historia">Historia</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Films">Peliculas</Link></li>
        
      </ul>
    </nav>
  );
};

export default Menu;
