import React, { useState } from 'react';
import './style.css';
import { auth } from "../../firebase/firebase"; // 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [modoRegistro, setModoRegistro] = useState(false);
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');

  const manejarSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMensajeExito(''); // Resetear mensaje de éxito al hacer submit
    try {
      if (modoRegistro) {
        await createUserWithEmailAndPassword(auth, correo, password);
        setMensajeExito('¡Usuario registrado exitosamente!'); // Mensaje de éxito
      } else {
        await signInWithEmailAndPassword(auth, correo, password);
        setMensajeExito('¡Inicio de sesión exitoso! Bienvenido!');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="galactic-container">
      <h2>{modoRegistro ? 'Registro Galáctico' : 'Login Interplanetario'}</h2>
      <form className="galactic-form" onSubmit={manejarSubmit}>
        <input
          type="email"
          placeholder="Correo galáctico"
          required
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña secreta"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="galactic-button">
          {modoRegistro ? 'Registrar' : 'Iniciar Sesión'}
        </button>
        {error && <p className="error-text">{error}</p>}
      </form>
      
      {/* Mostrar mensaje de éxito con animación */}
      {mensajeExito && (
        <p className="success-text fade-in">{mensajeExito}</p>
      )}
      
      <p className="toggle-text" onClick={() => setModoRegistro(!modoRegistro)}>
        {modoRegistro ? '¿Ya tienes cuenta? Inicia sesión aquí' : '¿No tienes cuenta? Regístrate'}
      </p>
    </div>
  );
};

export default Login;
