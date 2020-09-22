import React from 'react';
import TemplateBar from '../../components/TemplateBar';

import '../../App.css';
import './style.css';

function Home() {

  const leftHandEmoji = '👈';

  return (
    <>
      <TemplateBar/>
      <div className="home-container">
        <h1>
          Front-End<br/>Design<br/>UI/UX
        </h1>
        <h3>William Gonçalves</h3>
        <p>
          <q>Se você pensa que pode ou sonha que pode, comece. Ousadia tem genialidade, poder e mágica. Ouse fazer e o poder lhe será dado.</q><br/>
          <i>Johann Goethe</i>
        </p>
      </div>
      
    </>
      
  );
}

export default Home;
