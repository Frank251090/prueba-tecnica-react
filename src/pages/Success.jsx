import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px', fontFamily: 'sans-serif' }}>
      
      {/* Título fuera de la tarjeta */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}>
        <span style={{ fontSize: '28px', color: '#00755b' }}>✔</span>
        <h2 style={{ fontSize: '24px', color: '#333', margin: 0, fontWeight: 'bold' }}>Has finalizado tu proceso exitosamente</h2>
      </div>
      
      {/* Tarjeta blanca */}
      <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '50px 40px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', maxWidth: '500px', width: '100%' }}>
        <h3 style={{ fontSize: '18px', color: '#333', marginBottom: '15px', fontWeight: 'bold' }}>Bienvenido a tu nuevo Servicio de Claro</h3>
        <p style={{ fontSize: '14px', color: '#333', lineHeight: '1.6', marginBottom: '40px' }}>
          Enviaremos a tu correo electrónico una copia del contrato que acabas<br/>
          de diligenciar y los pasos a seguir para la activación de tu plan.
        </p>
        
        <button 
          onClick={() => navigate('/')}
          style={{ backgroundColor: '#da291c', color: 'white', border: 'none', borderRadius: '25px', padding: '12px 35px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Volver a Inicio
        </button>
      </div>

    </div>
  );
};

export default Success;