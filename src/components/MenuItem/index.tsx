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
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({ item }) => {
  return (
    <li className="menu-item">
        <div className="menu-background" style={{background: `url(${item.image}) no-repeat center`, backgroundSize: `50%`, opacity: '0.1'}}></div>
        <Link to={item.route}>
            <p>{item.label}</p>
        </Link>
    </li>
  );
}

export default MenuItem;