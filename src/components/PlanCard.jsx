import React from 'react';

const PlanCard = ({ title, isSelected, onClick }) => {
  return (
    // Agregamos el onClick al contenedor principal para que toda la tarjeta sea cliqueable
    <div 
      className={`plan-card ${isSelected ? 'selected' : ''}`} 
      onClick={onClick}
    >
      {/* Cambiamos defaultChecked por checked, y le ponemos el onChange */}
      <input 
        type="radio" 
        name="plan" 
        checked={isSelected} 
        onChange={onClick} 
      />
      
      <div className="plan-details">
        <h4>{title}</h4>
        <p className="includes">Incluye:</p>
        <p className="plan-desc">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>
      </div>
    </div>
  );
};

export default PlanCard;