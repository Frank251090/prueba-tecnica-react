import React from 'react';

const Button = ({ text, onClick, variant = 'primary' }) => {
  // variant puede ser 'primary' (rojo) o 'secondary' (blanco con borde rojo)
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;