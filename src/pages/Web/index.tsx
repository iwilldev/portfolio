import React from 'react';
import TemplateBar from '../../components/TemplateBar';
import Window from '../../components/Window';

import portfolioList from '../Project/portfolioList';
import { Link } from 'react-router-dom';

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
                    <Link key={item.id} to={'/project/'+item.id} style={{background: `url(${item.image})`, backgroundPosition: 'top', backgroundSize: 'cover'}}>
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
