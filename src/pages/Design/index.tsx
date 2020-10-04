import React from 'react';
import TemplateBar from '../../components/TemplateBar';
import PortfolioItem from '../../components/PortfolioItem';
import Window from '../../components/Window';

import portfolioList from '../Project/portfolioList';

import '../Web/style.css';

function Design() {

  return (
    <>
      <TemplateBar/>
      <Window icon="/assets/img/icons/ink.svg" title="Design">
        <div className="code-content">
          <div className="code-header">
            <h1>Design</h1>
          </div>
          <div className="code-container">
            <div className="code-grid">
              {portfolioList.map((item) => {
                if (item.type === 'design') {
                  return (
                    <PortfolioItem key={item.id} link={item.id} image={item.image} title={item.title} />
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

export default Design;
