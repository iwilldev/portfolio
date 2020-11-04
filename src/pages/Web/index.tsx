import React from 'react';
import PortfolioItem from '../../components/PortfolioItem';
import Window from '../../components/Window';

import portfolioList from '../Project/portfolioList';

import './style.css';

function Portfolio() {

  return ( 
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
                    <PortfolioItem key={item.id} item={item} />
                  )
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </Window>
  );
}

export default Portfolio;
