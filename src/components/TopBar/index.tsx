import React from 'react';
import './style.css';
import RealTimeClock from '../RealTimeClock';
import Menu from '../Menu';

function TopBar() {
  return (
    <>
      <nav>
          <Menu/>
          <RealTimeClock/>
      </nav>
      
    </>
  );
}

export default TopBar;