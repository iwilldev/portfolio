import React, { useState, useEffect } from 'react';
import Window from '../../components/Window';

import './style.css';

function Project(props: any) {

  const [projectTitle, setProjectTitle] = useState('');
  const href = window.location.pathname.split('/');
  const id = href[2];

  useEffect(() => {
    if (props.location.state) {
      setProjectTitle(props.location.state.title)
    } else {
      setProjectTitle('ops! volte e escolha um projeto')
    }
  }, [props.location.state]);
  
  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
      <Window icon="/assets/img/icons/ink.svg" title={projectTitle} type={props.location.state ? props.location.state.type : null}>
        <div className="project-content">
          <div className="project-container">
            <div className="project-header">
              <h1>{ projectTitle }</h1>
            </div>
            {
              props.location.state 
              ? <div className="project-grid">
              <div className="fragment">
                <img src={props.location.state.image} alt={'Imagem do projeto' + props.location.state.title}/>
                <span>
                  <p>{props.location.state.description}</p>
                  {props.location.state.link !== '' && <a href={props.location.state.link} rel="noopener noreferrer" target="_blank">Ver mais</a>}
                  {props.location.state.stack !== '' && <div className="stack-container"><p>Principal Ferramenta:</p> <img src={props.location.state.stkimg} alt={props.location.state.stack} /></div> }
                </span>
                <img src={props.location.state.secondImage} alt={'Imagem do projeto' + props.location.state.title}/>
                <span>
                  <h3>{props.location.state.secondTitle}</h3>
                  <p>{props.location.state.secondDescription}</p>
                </span>
                <img src={props.location.state.thirdImage} alt={'Imagem do projeto' + props.location.state.title}/>
                <span>
                  <h3>{props.location.state.thirdTitle}</h3>
                  <p>{props.location.state.thirdDescription}</p>
                </span>
                <img src={props.location.state.fourthImage} alt={'Imagem do projeto' + props.location.state.title}/>
                <span>
                  <h3>{props.location.state.fourthTitle}</h3>
                  <p>{props.location.state.fourthDescription}</p>
                </span>
              </div>
            </div>
            : null
            }
          </div>
        </div>
      </Window>
  );
}

export default Project;