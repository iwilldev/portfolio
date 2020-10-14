import React from 'react';

import '../../App.css';
import './style.css';

import wgLogo from '../../assets/img/wg-logo.png';

function Home() {

  const firstH1 = `<web dev>`;
  const secondH1 = `.design{}`;

  return (
      <div className="home-container">
        <img src={wgLogo} alt="Meu logo, as iniciais w g dentro de um quadrado, com dois parênteses fora, representando uma função em JavaScript"/>
        <h1>
          {firstH1}<br/>{secondH1}
        </h1>
        <p>
          <q>Se você pensa que pode ou sonha que pode, comece. Ousadia tem genialidade, poder e mágica. Ouse fazer e o poder lhe será dado.</q><br/>
          <i>Johann Goethe</i>
        </p>
      </div>
      
  );
}

export default Home;
