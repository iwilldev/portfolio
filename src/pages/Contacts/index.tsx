import React from 'react';
import TemplateBar from '../../components/TemplateBar';
import Window from '../../components/Window';

import contactsList from './contactsList';
import './style.css';

function Contacts() {
  return (
    <>
      <TemplateBar/>
      <Window icon="/assets/img/icons/contact.svg" title="Contatos">
        <div className="content">
        <p>Olá, visitante! Se você veio do Instagram, ou de outro caminho, através do meu link de contato, pode ver meu portfólio e currículo através do <span className="red">'Botão Iniciar'</span>, na barra acima.</p>
          <div className="contact-container">
          { contactsList.map((item) => { 
              return (
                <a key={item.action} href={item.link}>
                  <img src={item.image} alt={item.action}/>
                  <div className="contact-description">
                    <h1>{item.label}</h1>
                    <p>{item.action}</p>
                  </div>
                </a>
              )
          })}
          </div>
        </div>
      </Window>
    </>
  );
}

export default Contacts;
