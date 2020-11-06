import React, { useState, useEffect } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';

import closeButtonImg from '../../assets/img/ui/close.svg';

interface WindowProps {
  icon: string;
  title: string;
  type?: string;
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
        <small>{props.title}</small>
        <img 
          src={closeButtonImg} 
          onClick={() => {
            if (window.location.href.includes('project')) {
              if (props.type === "código") {
                history.push("/web");
              } else if (props.type === "design") {
                history.push("/design");
              } else {
                history.push("/");
              }
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