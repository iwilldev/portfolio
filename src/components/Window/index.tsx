import React, { useState, useEffect } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';

import closeButtonImg from '../../assets/img/ui/close.svg';

interface WindowProps {
  icon: string;
  title: string;
}

const Window: React.FunctionComponent<WindowProps> = (props) => {

  const [windowClasses, setWindowClasses] = useState('window-box closed');
  const history = useHistory();

  useEffect(() => {
    setInterval(() => {
      setWindowClasses('window-box')
    }, 100);
  }, []);

  return (
    <div className={windowClasses}>
      <header className="window-header">
        <img src={props.icon} alt="Sobre Mim"/>
        <p>{props.title}</p>
        <img 
          src={closeButtonImg} 
          onClick={() => {
            if (window.location.href.includes('project')) {
              history.goBack();
            } else {
              history.push("/");
            }
          }}
          alt="Fechar Janela"
        />
      </header>
      <section>
        {props.children}
      </section>
    </div>
  );
}

export default Window;