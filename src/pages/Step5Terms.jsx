import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';

const Step5Terms = () => {
  const navigate = useNavigate();
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  return (
    <Layout 
      step={5} 
      title="Aceptación de Términos" 
      description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    >
      <div style={{ height: '280px', overflowY: 'auto', paddingRight: '15px', color: '#333', fontSize: '13px', lineHeight: '1.6' }}>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Lorem Ipsum is not simply</h3>
        <p style={{ marginBottom: '15px' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        <p style={{ marginBottom: '15px' }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
      </div>

      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#333', cursor: 'pointer' }}>
          <input type="checkbox" checked={check1} onChange={(e) => setCheck1(e.target.checked)} />
          Autorizo el tratamiento de mis datos personales
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#333', cursor: 'pointer' }}>
          <input type="checkbox" checked={check2} onChange={(e) => setCheck2(e.target.checked)} />
          Autorizo el tratamiento de mis datos personales
        </label>
      </div>

      <div className="button-group">
        <Button text="Regresar" variant="secondary" onClick={() => navigate('/linea')} />
        <Button 
          text="Finalizar" 
          onClick={() => navigate('/success')} 
          disabled={!check1 || !check2} 
          style={{ opacity: (check1 && check2) ? 1 : 0.5 }} 
        />
      </div>
    </Layout>
  );
};

export default Step5Terms;