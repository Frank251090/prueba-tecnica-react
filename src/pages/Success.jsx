import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        <div style={{ color: '#00755b', fontSize: '24px' }}>✔</div>
        <h2 style={{ color: '#333', fontSize: '22px', margin: 0 }}>Has finalizado tu proceso exitosamente</h2>
      </div>

      <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
        <div style={{ background: '#4CAF50', width: '80px', height: '80px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
          <span style={{ color: 'white', fontSize: '40px' }}>✓</span>
        </div>
        
        <h2 style={{ color: '#00755b', marginBottom: '15px' }}>¡Todo listo!</h2>
        
        <h3 style={{ color: '#333', fontSize: '16px', marginBottom: '10px' }}>Bienvenido a tu nuevo Servicio de Claro</h3>
        <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', marginBottom: '30px', padding: '0 20px' }}>
          Enviaremos a tu correo electrónico una copia del contrato que acabas de diligenciar y los pasos a seguir para la activación de tu plan.
        </p>
        
        <Button text="Volver a Inicio" onClick={() => navigate('/')} />
      </div>

    </div>
  );
};

export default Success;