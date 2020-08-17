import React, { useState, useRef, useEffect } from 'react';
import MenuItem, { Item } from '../MenuItem';

import menuList from './menuList';
import dragonHead from '../../assets/img/white-dragon.png';

import './style.css';

function Menu() {

  const [visible, setVisible] = useState(false);
  const [menuClasses, setMenuClasses] = useState('menu');
  const menuArea = useRef();
  const menuButton = useRef();

  const toggleMenu = () => {
    if (visible) {
      setMenuClasses('menu');
      setVisible(false);
    } else {
      setMenuClasses('menu open-menu');
      setVisible(true);
    }
  }

  const handleClick = e => {
    if (menuArea.current.contains(e.target)) {
      return;
    } else if (menuButton.current.contains(e.target)) {
      return;
    } else {
      setMenuClasses('menu');
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <>
      <button ref={menuButton} onClick={toggleMenu}>
          <img src={dragonHead} alt="Dragon Head"/>
          <p>Iniciar</p>
      </button>
      <ul className={menuClasses} ref={menuArea}> 
          { menuList.map((item) => { 
              return (
                  <MenuItem item={item} /> 
              )
          })}
      </ul>
    </>
  );
}

export default Menu;