import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';

const Success = () => {
  const navigate = useNavigate();

  return (
    <Layout 
      step={5} 
      title="¡Solicitud Exitosa!" 
      description="Tu proceso ha sido registrado correctamente en nuestro sistema."
    >
      <div style={{ 
        textAlign: 'center', 
        padding: '60px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div style={{ fontSize: '80px', marginBottom: '10px' }}>✅</div>
        <h2 style={{ color: '#00755b', fontSize: '28px' }}>¡Todo listo!</h2>
        <p style={{ color: '#666', fontSize: '16px', maxWidth: '450px', lineHeight: '1.6' }}>
          Hemos recibido tu solicitud. Tu número de radicado es <strong>#2026-TR88</strong>. Un asesor de cuenta corporativa te contactará en las próximas 24 horas para confirmar la activación.
        </p>
        
        <div style={{ marginTop: '30px' }}>
          <Button 
            text="Volver al inicio" 
            onClick={() => navigate('/')} 
          />
        </div>
      </div>
    </Layout>
  );
};

export default Success;