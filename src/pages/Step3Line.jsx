import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';

const Step3Line = () => {
  const navigate = useNavigate();
  const [option, setOption] = useState('nueva');

  const handleNext = () => {
    if (option === 'portabilidad') {
      navigate('/portabilidad');
    } else {
      navigate('/terminos'); // Inclusión y Nueva van a términos
    }
  };

  return (
    <Layout 
      step={3} 
      title="¡Activa a tu familia con Bolívar y Claro!" 
      description="Dependiendo del tipo de línea de tu familiar, elige una de las siguientes opciones."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* Opción 1 */}
        <div className={`plan-card ${option === 'nueva' ? 'selected' : ''}`} onClick={() => setOption('nueva')} style={{ cursor: 'pointer', alignItems: 'center' }}>
          <input type="radio" checked={option === 'nueva'} readOnly />
          <div className="plan-details" style={{ flexGrow: 1 }}>
            <h4 style={{ margin: 0 }}>Línea Nueva</h4>
            <p className="plan-desc" style={{ margin: 0 }}>Si deseas un nuevo número y recibir una nueva Sim Card, elige esta opción.</p>
          </div>
          <div style={{ fontSize: '24px' }}>📱</div> {/* Simulación de ícono */}
        </div>

        {/* Opción 2 */}
        <div className={`plan-card ${option === 'inclusion' ? 'selected' : ''}`} onClick={() => setOption('inclusion')} style={{ cursor: 'pointer', alignItems: 'center' }}>
          <input type="radio" checked={option === 'inclusion'} readOnly />
          <div className="plan-details" style={{ flexGrow: 1 }}>
            <h4 style={{ margin: 0 }}>Inclusión Claro</h4>
            <p className="plan-desc" style={{ margin: 0 }}>Si eres usuario actual de Claro (Postpago y Prepago) y quieres cambiar tu plan, elige esta opción.</p>
          </div>
          <div style={{ color: 'red', fontWeight: 'bold', fontSize: '18px' }}>Claro-</div>
        </div>

        {/* Opción 3 */}
        <div className={`plan-card ${option === 'portabilidad' ? 'selected' : ''}`} onClick={() => setOption('portabilidad')} style={{ cursor: 'pointer', alignItems: 'center' }}>
          <input type="radio" checked={option === 'portabilidad'} readOnly />
          <div className="plan-details" style={{ flexGrow: 1 }}>
            <h4 style={{ margin: 0 }}>Portabilidad</h4>
            <p className="plan-desc" style={{ margin: 0 }}>Si eres usuario de otro operador y deseas conservar tu número, elige esta opción.</p>
          </div>
          <div style={{ fontSize: '24px' }}>📲</div>
        </div>

      </div>

      <div className="button-group">
        <Button text="Regresar" variant="secondary" onClick={() => navigate('/datos')} />
        <Button text="Siguiente" onClick={handleNext} />
      </div>
    </Layout>
  );
};

export default Step3Line;