import React from 'react';
import TemplateBar from '../../components/TemplateBar';
import Window from '../../components/Window';

import experienceList from './experienceList';
import stacksList from './stacksList';
import formationList from './formationList';

import suitCaseImg from '../../assets/img/pages/resume/work.svg';
import desktopImg from '../../assets/img/pages/resume/html.svg';
import licenseImg from '../../assets/img/pages/resume/license.svg';
import badgeImg from '../../assets/img/pages/resume/badge.svg';

import './style.css';

function Resume() {

  return (
    <>
      <TemplateBar/>
      <Window icon="/assets/img/icons/certificate.svg" title="Currículo">
        <div className="resume-content">
          <div className="experience-container">
            <div className="experience-header">
              <img src={suitCaseImg} alt="Ícone de mala corporativa"/>
              <h1>EXPERIÊNCIA</h1>
            </div>
            { experienceList.map((item) => { 
                return (
                  <div key={item.title} className="experience-item">
                    <h3>{item.title}</h3>
                    <p><i>{item.start}</i> - <i>{item.end}</i></p>
                    <p>{item.description}</p>
                  </div>
                )
            })}
          </div>
          <div className="stacks-container">
            <div className="stacks-header">
              <img src={desktopImg} alt="Ícone de um desktop"/>
              <h1>HABILIDADES</h1>
            </div>
            <div className="stack-grid">
              { stacksList.map((item) => { 
                  return (
                    <div key={item.name} className="stack-item">
                      <img src={item.icon} alt={'Ícone do ' + item.name}/>
                      <p>{item.name}</p>
                    </div>
                  )
              })}
            </div>
          </div>
          <div className="formation-header">
              <img src={licenseImg} alt="Ícone de um desktop"/>
              <h1>FORMAÇÕES</h1>
          </div>
          <div className="formation-container">  
            { formationList.map((item) => { 
                return (
                  <div key={item.title} className="formation-item">
                    <img src={item.logo} alt={'Logo da ' + item.school}/>
                    <h3>{item.title}</h3>
                    <p>{item.school}</p>
                    <p><i>{item.startDate}</i> - <i>{item.endDate}</i></p>
                    <p><b>Ementa/Conteúdos: </b>{item.content}</p>
                    {item.link !== '' && <a href={item.link} rel="noopener noreferrer" target="_blank"><img src={badgeImg} alt="medalha"/>Ver Certificado</a>}
                  </div>
                )
            })}
          </div>
        </div>
      </Window>
    </>
  );
}

export default Resume;
