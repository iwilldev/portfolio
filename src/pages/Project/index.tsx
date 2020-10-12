import React, { useState, useEffect } from 'react';
import Window from '../../components/Window';

import portfolioList from './portfolioList';

import './style.css';

function Project() {

  const [projectId, setProjectId] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const href = window.location.pathname.split('/');
  const id = href[2];
  
  useEffect(() => {
    setProjectId(id);
    portfolioList.map((item) => {
      if (item.id === projectId) {
        setProjectTitle(item.title);
      }
      return null;
    });
    
  }, [id, projectId]);

  return (
      <Window icon="/assets/img/icons/ink.svg" title={projectTitle}>
        <div className="project-content">
          <div className="project-container">
            <div className="project-header">
              <h1>{projectTitle}</h1>
            </div>
            <div className="project-grid">
              {
                portfolioList.map((item) => {
                  if (item.id === projectId) {
                    return (
                      <div key={item.id} className="fragment">
                        <img src={item.image} alt={'Imagem do projeto' + item.title}/>
                        <span>
                          <p>{item.description}</p>
                          {item.link !== '' && <a href={item.link} rel="noopener noreferrer" target="_blank">Ver mais</a>}
                          {item.stack !== '' && <div className="stack-container"><h5>Principal Stack:</h5> <img src={item.stkimg} alt={item.stack} /></div> }
                        </span>
                        <img src={item.secondImage} alt={'Imagem do projeto' + item.title}/>
                        <span>
                          <h3>{item.secondTitle}</h3>
                          <p>{item.secondDescription}</p>
                        </span>
                        <img src={item.thirdImage} alt={'Imagem do projeto' + item.title}/>
                        <span>
                          <h3>{item.thirdTitle}</h3>
                          <p>{item.thirdDescription}</p>
                        </span>
                        <img src={item.fourthImage} alt={'Imagem do projeto' + item.title}/>
                        <span>
                          <h3>{item.fourthTitle}</h3>
                          <p>{item.fourthDescription}</p>
                        </span>
                      </div>
                    )
                  }
                  return null;
                })
              }
            </div>
          </div>
        </div>
      </Window>
  );
}

export default Project;