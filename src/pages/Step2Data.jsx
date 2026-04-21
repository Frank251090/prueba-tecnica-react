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
      description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    >
      <div className="form-grid">
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" className="form-control" placeholder="Lorem Ipsum is simply" />
        </div>
        <div className="form-group">
          <label>Número de Celular</label>
          <input type="text" className="form-control" placeholder="Lorem Ipsum is simply" />
        </div>
        <div className="form-group">
          <label>Tipo de Documento</label>
          <select className="form-control">
            <option>Lorem Ipsum is simply</option>
          </select>
        </div>
        <div className="form-group">
          <label>Número de Documento</label>
          <input type="text" className="form-control" placeholder="Lorem Ipsum is simply" />
        </div>
        <div className="form-group">
          <label>Correo Electrónico Corporativo</label>
          <input type="text" className="form-control" placeholder="Lorem Ipsum is simply" />
        </div>
        <div className="form-group">
          <label>Fecha de Nacimiento</label>
          <input type="text" className="form-control" placeholder="00 / 00 / 0000" />
        </div>
      </div>

      <h4 className="section-title" style={{ color: '#666', marginTop: '10px' }}>Domicilio</h4>
      
      <div className="form-grid">
        <div className="form-group">
          <label>Dirección de Residencia</label>
          <input type="text" className="form-control" placeholder="Lorem Ipsum is simply" />
        </div>
        <div className="form-group">
          <label>Ciudad / Municipio</label>
          <input type="text" className="form-control" placeholder="Lorem Ipsum is simply" />
        </div>
        <div className="form-group">
          <label>Departamento</label>
          <select className="form-control">
            <option>Lorem Ipsum is simply</option>
          </select>
        </div>
        <div className="form-group">
          <label>Barrio</label>
          <input type="text" className="form-control" placeholder="Lorem Ipsum is simply" />
        </div>
      </div>

      <div className="button-group">
        <Button text="Regresar" variant="secondary" onClick={() => navigate('/')} />
        <Button text="Siguiente" onClick={() => navigate('/linea')} />
      </div>
    </Layout>
  );
};

export default Step2Data;