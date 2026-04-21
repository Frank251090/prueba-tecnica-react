import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';

const Step2Data = () => {
  const navigate = useNavigate();

  return (
    <Layout 
      step={2} 
      title="Datos Personales" 
      description="Por favor, completa la información de contacto y domicilio para continuar con tu proceso de contratación."
    >
      <div className="form-grid">
        <div className="form-group">
          <label>Nombre Completo</label>
          <input type="text" className="form-control" placeholder="Ej. Juan Pérez" />
        </div>
        <div className="form-group">
          <label>Tipo de Documento</label>
          <select className="form-control">
            <option>Cédula de Ciudadanía</option>
            <option>Cédula de Extranjería</option>
          </select>
        </div>
        <div className="form-group">
          <label>Número de Documento</label>
          <input type="text" className="form-control" placeholder="12345678" />
        </div>
        <div className="form-group">
          <label>Fecha de Nacimiento</label>
          <input type="date" className="form-control" />
        </div>
        <div className="form-group">
          <label>Correo Electrónico Corporativo</label>
          <input type="email" className="form-control" placeholder="usuario@empresa.com" />
        </div>
        <div className="form-group">
          <label>Número de Celular</label>
          <input type="tel" className="form-control" placeholder="300 123 4567" />
        </div>
      </div>

      <h4 className="section-title">Domicilio</h4>
      
      <div className="form-grid">
        <div className="form-group">
          <label>Dirección de Residencia</label>
          <input type="text" className="form-control" placeholder="Calle 123 # 45 - 67" />
        </div>
        <div className="form-group">
          <label>Departamento</label>
          <select className="form-control">
            <option>Selecciona un departamento</option>
          </select>
        </div>
        <div className="form-group">
          <label>Ciudad / Municipio</label>
          <select className="form-control">
            <option>Selecciona una ciudad</option>
          </select>
        </div>
        <div className="form-group">
          <label>Barrio</label>
          <input type="text" className="form-control" placeholder="Nombre del barrio" />
        </div>
      </div>

      <div className="button-group">
        <Button 
          text="Regresar" 
          variant="secondary"
          onClick={() => navigate('/')} 
        />
        <Button 
          text="Siguiente" 
          onClick={() => navigate('/linea')} 
        />
      </div>
    </Layout>
  );
};

export default Step2Data;