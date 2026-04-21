import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importamos nuestras páginas
import Step1Plan from './pages/Step1Plan';
import Step2Data from './pages/Step2Data';
import Step3Line from './pages/Step3Line';
import Step4Portability from './pages/Step4Portability';
import Step5Terms from './pages/Step5Terms';
import Success from './pages/Success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Step1Plan />} />
        <Route path="/datos" element={<Step2Data />} />
        <Route path="/linea" element={<Step3Line />} />
        <Route path="/portabilidad" element={<Step4Portability />} />
        <Route path="/terminos" element={<Step5Terms />} />
        <Route path="/exito" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;