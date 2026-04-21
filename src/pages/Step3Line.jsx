import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';

const Step3Line = () => {
  const navigate = useNavigate();
  // Estado para la selección: 'nueva' es el valor por defecto
  const [option, setOption] = useState('nueva');

  const handleNext = () => {
    if (option === 'nueva') {
      navigate('/terminos'); // Salta al Paso 5
    } else {
      navigate('/portabilidad'); // Va al Paso 4
    }
  };

  return (
    <Layout 
      step={3} 
      title="Línea Nueva o Portabilidad" 
      description="Selecciona si deseas adquirir una línea nueva o realizar el proceso de portabilidad con tu número actual."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* Opción Línea Nueva */}
        <div 
          className={`plan-card ${option === 'nueva' ? 'selected' : ''}`}
          onClick={() => setOption('nueva')}
          style={{ cursor: 'pointer' }}
        >
          <input 
            type="radio" 
            name="line-option"
            checked={option === 'nueva'} 
            onChange={() => setOption('nueva')} 
          />
          <div className="plan-details">
            <h4>Línea Nueva</h4>
            <p className="plan-desc">Deseo adquirir un número telefónico nuevo para mi servicio corporativo.</p>
          </div>
        </div>

        {/* Opción Portabilidad */}
        <div 
          className={`plan-card ${option === 'portabilidad' ? 'selected' : ''}`}
          onClick={() => setOption('portabilidad')}
          style={{ cursor: 'pointer' }}
        >
          <input 
            type="radio" 
            name="line-option"
            checked={option === 'portabilidad'} 
            onChange={() => setOption('portabilidad')} 
          />
          <div className="plan-details">
            <h4>Portabilidad</h4>
            <p className="plan-desc">Deseo traer mi número actual de otro operador conservando el mismo número.</p>
          </div>
        </div>

      </div>

      <div className="button-group">
        <Button 
          text="Regresar" 
          variant="secondary" 
          onClick={() => navigate('/datos')} 
        />
        <Button 
          text="Siguiente" 
          onClick={handleNext} 
        />
      </div>
    </Layout>
  );
};

export default Step3Line;