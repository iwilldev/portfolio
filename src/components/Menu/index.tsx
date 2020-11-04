import React, { useState, useRef, useEffect } from 'react';
import MenuItem from '../MenuItem';

import menuList from './menuList';

import './style.css';

function Menu() {

  const [visible, setVisible] = useState(false);
  const [menuClasses, setMenuClasses] = useState('menu');
  const menuArea = useRef<HTMLUListElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    if (visible) {
      setMenuClasses('menu');
      setVisible(false);
    } else {
      setMenuClasses('menu open-menu');
      setVisible(true);
    }
  }

  const handleClick = (event: any) => {
    if (menuArea && menuArea.current && menuButton && menuButton.current) {
      if (menuArea.current.contains(event.target)) {
        return;
      } else if (menuButton.current.contains(event.target)) {
        return;
      } else {
        setMenuClasses('menu');
        setVisible(false);
      }
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
      <button className="menu-button" ref={menuButton} onClick={toggleMenu}>
          <i className="menu-button-icon"></i>
          {/* <img src={buttonImg} alt="Ícone do Botão do Menu"/> */}
          <p>Menu</p>
      </button>
      <ul className={menuClasses} ref={menuArea}> 
          { menuList.map((item) => { 
              return (
                  <MenuItem key={item.label} item={item} toggleMenu={toggleMenu} /> 
              )
          })}
      </ul>
    </>
  );
}

export default Menu;