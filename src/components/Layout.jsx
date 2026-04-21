import React from 'react';

const Layout = ({ children, step, title, description }) => {
  return (
    <div>
      {/* Encabezado global (fuera de la caja) */}
      <div className="top-header">
        <h2>Tecnología para tu Empresa</h2>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        </p>
      </div>

      <div className="wizard-container">
        {/* Panel Izquierdo Dinámico */}
        <div className="sidebar">
          <div className="sidebar-icon">💼</div>
          <h4>Paso {step}</h4>
          <h2>{title}</h2>
          <p>{description}</p>
          
          <div className="progress-dots">
            {[1, 2, 3, 4, 5].map((s) => (
              <React.Fragment key={s}>
                <div className={`dot ${s === step ? 'active' : ''}`}></div>
                {s < 5 && <div className="dot-line"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Panel Derecho para el contenido de cada página */}
        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;