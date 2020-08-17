import React from 'react';
import './style.css';
import RealTimeClock from '../RealTimeClock';
import Menu from '../Menu/index'

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