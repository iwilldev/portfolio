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
        <div className="contact-content">
          <div className="contact-header">
            <h1>Contatos</h1>
            <p>Olá, visitante! Se você veio do Instagram, ou de outro caminho, através do meu link de contato, pode ver meu portfólio e currículo, no botão de 'Menu' acima.</p>
          </div>
          <div className="contact-container">
          { contactsList.map((item) => { 
              return (
                <a key={item.action} href={item.link}>
                  <img src={item.image} alt={item.action}/>
                  <div className="contact-description">
                    <h5>{item.label}</h5>
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
