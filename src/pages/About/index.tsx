import React from 'react';
import TemplateBar from '../../components/TemplateBar';
import Window from '../../components/Window';

import profilePic from '../../assets/img/pages/about/profile.jpeg';
import mageHatImage from '../../assets/img/pages/about/mago.jpg';

function About() {

  const descriptionA = `Desenvolvedor em Formação, apaixonado por Front-End e Design, com estudos no desenvolvimento web, desde HTML, CSS e JavaScript, até React, Angular e Vue, além de conceitos de Design, UI, UX, usabilidade e acessibilidade.`;
  const descriptionB = `Apelido dado pelo meu amigo e parceiro nessa jornada dev, Thiago Pederzolli. Usando essa identidade, compartilho conhecimento sobre CSS, no LinkedIn e no Instagram e devo abrir espaço para novos temas, em breve.`;

  return (
    <>
      <TemplateBar/>
      <Window icon="/assets/img/icons/about-me.svg" title="Sobre Mim">
        <div className="content">
          <div className="line">
            <div className="left">
              <h1>William Gonçalves</h1>
              <p>{descriptionA}</p>
            </div>
            <div className="right">
              <img src={profilePic} alt="Minha foto de perfil, sendo eu sorrindo ao lado de uma mesa com dois monitores e uma estátua de um mago, entre eles"/>
            </div>
          </div>
          <div className="line">
            <div className="left">
              <h1>Mago do CSS</h1>
              <p>{descriptionB}</p>
            </div>
            <div className="right">
              <img src={mageHatImage} alt="Chapéu branco com o logo do CSS 3 como estampa, sobre fundo preto e azul"/>
            </div>
          </div>
        </div>
      </Window>
    </>
  );
}

export default About;
