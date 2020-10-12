import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export interface Item {
    image: string;
    label: string;
    route: string;
}

interface MenuItemProps {
    item: Item;
    toggleMenu: Function;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({ item, toggleMenu }) => {

  const closeMenu = () => {
    setTimeout(toggleMenu, 300);
  }

  return (
    <li className="menu-item" onClick={closeMenu}>
        <div className="menu-background" style={{background: `url(${item.image}) no-repeat right`, backgroundSize: `contain`, opacity: '0.1'}}></div>
        <Link to={item.route}>
            <p>{item.label}</p>
        </Link>
    </li>
  );
}

export default MenuItem;