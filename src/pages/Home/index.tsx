import React from 'react';

import '../../App.css';
import './style.css';

import wgLogo from '../../assets/img/wg-logo.png';

function Home() {

  return (
      <div className="home-container">
        <img src={wgLogo} alt="Meu logo, as iniciais w g dentro de um quadrado, com dois parênteses fora, representando uma função em JavaScript"/>
        <h3>
          Front-End<br/>Design<br/>UI/UX
        </h3>
        <p>
          <q>Se você pensa que pode ou sonha que pode, comece. Ousadia tem genialidade, poder e mágica. Ouse fazer e o poder lhe será dado.</q><br/>
          <i>Johann Goethe</i>
        </p>
      </div>
      
  );
}

export default Home;
