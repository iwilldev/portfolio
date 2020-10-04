import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

interface WindowProps {
    link: string;
    image: string;
    title: string;
  }
  
  const VideoItem: React.FunctionComponent<WindowProps> = (props) => {
  
    const [itemHovered, setItemHovered] = useState(false);

    const paintBlue = () => {
        setItemHovered(true);
    }

    const paintBlack = () => {
        setItemHovered(false);
    }
  
    return (
        <a onMouseEnter={paintBlue} onMouseLeave={paintBlack} key={props.link} href={props.link} rel="noopener noreferrer" target="_blank" style={{background: `url(${props.image})`, backgroundColor: itemHovered ? '#0e5e97' : '#111111', backgroundPositionY: 'calc(50% - 1.5rem)', backgroundPositionX: 'center', backgroundSize: '75%', backgroundRepeat: 'no-repeat'}}>
            <h5>{props.title}</h5>
        </a>
    );
  }
  
export default VideoItem;