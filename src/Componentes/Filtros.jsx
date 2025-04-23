// src/Componentes/Filtros.jsx
import React from "react";

function Filtros({ value, onChange, placeholder = "Filtrar..." }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        padding: "0.5rem",
        fontSize: "1rem",
        marginBottom: "1rem",
        width: "100%",
        maxWidth: "300px",
        borderRadius: "5px",
        border: "1px solid #ccc"
      }}
    />
  );
}

export default Filtros;
