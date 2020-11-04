import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

interface ItemProps {
    item?: {
        id?: string;
        type?: string;
        stack?: string;
        stkimg?: string;
        title?: string;
        description?: string;
        image?: string;
        secondTitle?: string;
        secondDescription?: string;
        secondImage?: string;
        thirdTitle?: string;
        thirdDescription?: string;
        thirdImage?: string;
        fourthTitle?: string;
        fourthDescription?: string;
        fourthImage?: string;
        link?: string;
    }
}
  
  const PortfolioItem: React.FunctionComponent<ItemProps> = ({ item }) => {
  
    const [itemHovered, setItemHovered] = useState(false);

    const paintBlue = () => {
        setItemHovered(true);
    } 

    const paintBlack = () => {
        setItemHovered(false);
    }
  
    return (
        <>
        { 
            item 
            ? <Link to={{
                pathname: `/project`, 
                state: item
            }}
            onMouseEnter={paintBlue} 
            onMouseLeave={paintBlack} 
            key={item.link} 
            style={{
                background: `url(${item.image})`,
                backgroundColor: itemHovered ? '#0e5e97' : '#111111',
                backgroundPositionY: 'calc(50% - 1.5rem)',
                backgroundPositionX: 'center',
                backgroundSize: '75%',
                backgroundRepeat: 'no-repeat'
            }}>
                <h5>{item.title}</h5>
                <img src={item.stkimg} alt={item.stack}/>
            </Link>
            : null
        }
        </>
        
    );
  }
  
export default PortfolioItem;