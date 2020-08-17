import React, { useState } from 'react';
import MenuItem, { Item } from '../MenuItem';

import menuList from './menuList';
import dragonHead from '../../assets/img/white-dragon.png';

import './style.css';

function Menu() {

  const [visible, setVisible] = useState(false);
  const [menuClasses, setMenuClasses] = useState('menu');

  function toggleMenu() {
    if (visible) {
      setMenuClasses('menu');
      setVisible(false);
    } else {
      setMenuClasses('menu open-menu');
      setVisible(true);
    }
  }

  return (
    <>
      <button onClick={toggleMenu}>
          <img src={dragonHead} alt="Dragon Head"/>
          <p>Iniciar</p>
      </button>
      <ul className={menuClasses}>
          { menuList.map((item: Item) => { 
              return (
                  <MenuItem item={item} /> 
              )
          })}
      </ul>
    </>
  );
}

export default Menu;