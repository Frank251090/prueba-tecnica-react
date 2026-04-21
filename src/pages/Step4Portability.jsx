import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';

const Step4Portability = () => {
  const navigate = useNavigate();

  return (
    <Layout 
      step={4} 
      title="Datos de Portabilidad" 
      description="Ingresa la información de tu línea actual para realizar el proceso de traslado a nuestra red."
    >
      {/* Formulario de una columna para portabilidad */}
      <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="form-group">
          <label>Número de Celular a Portar</label>
          <input type="tel" className="form-control" placeholder="300 123 4567" />
        </div>

        <div className="form-group">
          <label>Operador Donante (Actual)</label>
          <select className="form-control">
            <option>Selecciona tu operador actual</option>
            <option>Claro</option>
            <option>Movistar</option>
            <option>Tigo</option>
            <option>Wom</option>
          </select>
        </div>

        <div className="form-group">
          <label>Tipo de Plan Actual</label>
          <select className="form-control">
            <option>Prepago</option>
            <option>Postpago</option>
          </select>
        </div>
      </div>

      <div className="button-group">
        <Button 
          text="Regresar" 
          variant="secondary" 
          onClick={() => navigate('/linea')} 
        />
        <Button 
          text="Siguiente" 
          onClick={() => navigate('/terminos')} 
        />
      </div>
    </Layout>
  );
};

export default Step4Portability;