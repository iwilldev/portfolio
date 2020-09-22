import React from 'react';
import TemplateBar from '../../components/TemplateBar';
import Window from '../../components/Window';

import portfolioList from '../Project/portfolioList';
import { Link } from 'react-router-dom';

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
                    <Link key={item.id} to={'/project/'+item.id} style={{background: `url(${item.image})`, backgroundColor: '#fafafa', backgroundPositionY: 'calc(50% - 1.5rem)', backgroundPositionX: 'center', backgroundSize: '75%', backgroundRepeat: 'no-repeat'}}>
                      <h5>{item.title}</h5>
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

export default Design;
