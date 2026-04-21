import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';

const Step5Terms = () => {
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

  return (
    <Layout 
      step={5} 
      title="Términos y Condiciones" 
      description="Por favor lee y acepta los términos del contrato para finalizar tu solicitud."
    >
      <div className="terms-box" style={{ 
        height: '250px', 
        overflowY: 'scroll', 
        border: '1px solid #eee', 
        padding: '15px', 
        fontSize: '13px', 
        color: '#666',
        backgroundColor: '#fff',
        marginBottom: '20px'
      }}>
        <p><strong>CONTRATO DE PRESTACIÓN DE SERVICIOS</strong></p>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
        <br />
        <p>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input 
          type="checkbox" 
          id="accept" 
          checked={accepted} 
          onChange={(e) => setAccepted(e.target.checked)} 
        />
        <label htmlFor="accept" style={{ fontSize: '14px', cursor: 'pointer' }}>
          Acepto los términos y condiciones de la empresa
        </label>
      </div>

      <div className="button-group">
        <Button 
          text="Regresar" 
          variant="secondary" 
          onClick={() => navigate('/linea')} 
        />
        <Button 
          text="Finalizar" 
          onClick={() => navigate('/success')}
          disabled={!accepted} // Opcional: bloquea el botón si no acepta
          style={{ opacity: accepted ? 1 : 0.5 }}
        />
      </div>
    </Layout>
  );
};

export default Step5Terms;