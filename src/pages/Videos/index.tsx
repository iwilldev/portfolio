import React from 'react';
import VideoItem from '../../components/VideoItem';
import Window from '../../components/Window';

import videoList from './videoList';

import '../Web/style.css';

import '../../components/PortfolioItem/style.css';


function Videos() {

    return (
        <Window icon="/assets/img/icons/videos.svg" title="Vídeos">
            <div className="code-content">
            <div className="code-header">
                <h1>Vídeos</h1>
                <p>Assista meus vídeos em meu Canal 'Mago do CSS' no YouTube</p>
            </div>
            <div className="code-container">
                
                <div className="code-grid">
                {videoList.map((item) => {
                    return (
                    <VideoItem key={item.id} link={item.link} image={item.image} title={item.title} />
                    )
                })}
                </div>
            </div>
            </div>
        </Window>
    );
}

export default Videos;
