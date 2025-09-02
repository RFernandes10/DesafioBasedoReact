import React from 'react';

/**
 * Componente que renderiza um texto colorido e em maiúsculas
 * @param {string} text - O texto a ser exibido
 * @param {string} color - A cor do texto (pode ser uma palavra como 'red' ou um hexadecimal)
 */
const ColoredText = ({ text, color }) => {
  return (
    <p style={{ color: color }}>
      {text.toUpperCase()}
    </p>
  );
};

export default ColoredText;

