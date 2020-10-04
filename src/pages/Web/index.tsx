import React from 'react';
import TemplateBar from '../../components/TemplateBar';
import PortfolioItem from '../../components/PortfolioItem';
import Window from '../../components/Window';

import portfolioList from '../Project/portfolioList';

import './style.css';

function Portfolio() {

  return (
    <>
      <TemplateBar/>
      <Window icon="/assets/img/icons/devices.svg" title="Web: Apps e Sites">
        <div className="code-content">
          <div className="code-header">
            <h1>Web: Apps e Sites</h1>
          </div>
          <div className="code-container">
            
            <div className="code-grid">
              {portfolioList.map((item) => {
                if (item.type === 'código') {
                  return (
                    <PortfolioItem link={item.id} image={item.image} title={item.title} />
                  )
                }
              })}
            </div>
          </div>
        </div>
      </Window>
    </>
  );
}

export default Portfolio;
