import React from 'react';
import TemplateBar from '../../components/TemplateBar';
import Window from '../../components/Window';

import portfolioList from './portfolioList';
import { Link } from 'react-router-dom';

import './style.css';

function Portfolio() {

  portfolioList.reverse();

  return (
    <>
      <TemplateBar/>
      <Window icon="/assets/img/icons/devices.svg" title="Portfólio">
        <div className="content">
          <div className="code-container">
            <div className="code-header">
              <h1>Web / Código</h1>
            </div>
            <div className="portfolio-grid">
              {portfolioList.map((item) => {
                if (item.type == 'código') {
                  return (
                    <Link key={item.id} to={'/project/'+item.id} style={{background: `url(${item.image})`, backgroundPosition: 'center top', backgroundSize: 'cover'}}>
                      <h3>{item.title}</h3>
                    </Link>
                  )
                }
              })}
            </div>
          </div>
          <div className="design-container">
            <div className="design-header">
              <h1>Design</h1>
            </div>
            <div className="portfolio-grid">
              {portfolioList.map((item) => {
                if (item.type == 'design') {
                  return (
                    <Link key={item.id} to={'/project/'+item.id} style={{background: `url(${item.image})`, backgroundPosition: 'center top', backgroundSize: 'cover'}}>
                      <h3>{item.title}</h3>
                    </Link>
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
