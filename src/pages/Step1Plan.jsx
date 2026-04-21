import React, { useState } from 'react'; // Importamos useState
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import PlanCard from '../components/PlanCard';

const Step1Plan = () => {
  const navigate = useNavigate();
  
  // Memoria del componente: guardamos el ID del plan seleccionado. Inicia en 1.
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <Layout 
      step={1} 
      title="Plan Asignado" 
      description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC."
    >
      {/* Comparamos el estado actual. Si coincide, le pasa true y se pinta azul */}
      <PlanCard 
        title="28506 - Plan Conect Star EMP 35GB FIN" 
        isSelected={selectedPlan === 1} 
        onClick={() => setSelectedPlan(1)} 
      />
      <PlanCard 
        title="28506 - Plan Conect Star EMP 35GB FIN" 
        isSelected={selectedPlan === 2} 
        onClick={() => setSelectedPlan(2)} 
      />
      <PlanCard 
        title="28506 - Plan Conect Star EMP 35GB FIN" 
        isSelected={selectedPlan === 3} 
        onClick={() => setSelectedPlan(3)} 
      />

      <div className="button-container">
        <button className="btn btn-primary" onClick={() => navigate('/datos')}>
          Siguiente
        </button>
      </div>
    </Layout>
  );
};

export default Step1Plan;