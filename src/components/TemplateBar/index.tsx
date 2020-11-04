import React from 'react';
import './style.css';
import Menu from '../Menu/index'
import RealTimeClock from '../RealTimeClock';

interface TemplateBarProps {
  title?: string;
}

const TemplateBar: React.FunctionComponent<TemplateBarProps> = (props) => {
  return (
    <>
      <nav>
          <Menu/>
          <RealTimeClock/>
      </nav>
      {props.children}
    </>
  );
}

export default TemplateBar;