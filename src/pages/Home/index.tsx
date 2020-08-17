import React from 'react';
import TemplateBar from '../../components/TemplateBar';

import '../../App.css';
import './style.css';

function Home() {

  const leftHandEmoji = '👈';

  return (
      <TemplateBar>
        <span>
          <p>{leftHandEmoji}</p>
          <p>Navegue pelo botão 'Iniciar'</p>
        </span>
      </TemplateBar>
  );
}

export default Home;
