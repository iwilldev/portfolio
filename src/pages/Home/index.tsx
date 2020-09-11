import React from 'react';
import TemplateBar from '../../components/TemplateBar';

import '../../App.css';
import './style.css';

function Home() {

  const leftHandEmoji = '👈';

  return (
    <>
      <TemplateBar>
        <span className="bar-span">
          <p>{leftHandEmoji}</p>
          <p>Use o menu</p>
        </span>
      </TemplateBar>
      <div className="home-container">
        <h1>
          Front-End<br/>Design<br/>UI/UX
        </h1>
        <h2>William Gonçalves</h2>
        <p>
          <q>Se você pensa que pode ou sonha que pode, comece. Ousadia tem genialidade, poder e mágica. Ouse fazer e o poder lhe será dado.</q><br/>
          <i>Johann Goethe</i>
        </p>
      </div>
      
    </>
      
  );
}

export default Home;
