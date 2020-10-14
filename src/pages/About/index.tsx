import React from 'react';
import Window from '../../components/Window';

import profilePic from '../../assets/img/pages/about/profile.jpg';
import mageHatImage from '../../assets/img/pages/home/mago.png';

import './style.css';

function About() {

  return (
      <Window icon="/assets/img/icons/about-me.svg" title="Sobre Mim">
        <div className="about-content">
          <div className="about-header">
            <h1>William Gonçalves</h1>
          </div>
          <div className="about-line">
            <div className="left">
              <p>
                Carioca, natural da Zona Norte (Alô, Andaraí!), mas vivente da Oeste, há mais de 15 anos. Flamenguista roxo, desde os tempos de sofrência. Pai de um príncipe de 3 anos que me enche de orgulho e me mostra como A Vida é Bela e digna de um Oscar, como Roberto Benigni.<br/><br/>
                Canhoto nascido na Primavera de 1988, que desde cedo fez jus a fama dos 'left-handed', com ótima noção espacial, criatividade e tendência as atividades artísticas. Os astros, na hora registrada em certidão, garantiram intensidade, determinação, inconformismo, espontaneidade, livre-pensamento, grande imaginação e sensibilidade. Mas esse papo a gente deixa pra quem curte.<br/><br/>
                Designer "autodidata" (entre aspas, porque desde o advento da internet, ninguém aprende nada sozinho...hahaha) há tanto tempo que já nem sei o quanto, mas oficialmente atuante desde 2016, quando comecei a levar o tal talento mais a sério <br/><br/>
                Desenvolvedor em Formação, apaixonado por Front-End e Design, com estudos focados no desenvolvimento web, desde HTML, CSS e JavaScript, até React, Angular e Vue, além de conceitos de Design, UI, UX, usabilidade e acessibilidade. <br/><br/>
                Sabe o cara que você busca pra pensar o não óbvio em seus projetos e chegar a um resultado de encher os olhos? Esse cara sou eu! (São tantas emoções, bicho!)
              </p>
            </div>
            <div className="right">
              <img src={profilePic} alt="Minha foto de perfil, sendo eu sorrindo ao lado de uma mesa com dois monitores e uma estátua de um mago, entre eles"/>
            </div>
          </div>
          <div className="about-header">
            <h1>Mago</h1>
          </div>
          <div className="about-line">
            <div className="left">
              <p>
                O mago nasceu de uma brincadeira durante o Mega Hack 3.0 da Shawee, do qual participei, no desafio da Árvore Educação. Meu parceiro de equipe e amigo nessa jornada Dev, Thiago Pederzolli, me deu o apelido 'Mago do CSS', em função das minhas habilidades com estilização.<br/><br/>
                Aproveitando a alcunha, comecei a compartilhar conteúdo no Instagram, no LinkedIn e no YouTube, através do meu canal, falando sobre propriedades e recursos do CSS. Mas ao perceber que poderia explorar outros temas, reduzi o nome a 'Mago', para que outros assuntos possam ser abordados em publicações futuras.<br/><br/>
                A ideia é usar essa marca pessoal para replicar conhecimento e compartilhar o aprendizado com outros desevolvedores que, assim como eu, têm trilhado essa estrada do desenvolvimento Web.<br/><br/>
                <br/><br/>
              </p>
            </div>
            <div className="right">
              <img src={mageHatImage} alt="Chapéu branco com o logo do CSS 3 como estampa, sobre fundo preto e azul"/>
            </div>
          </div>
        </div>
      </Window>
  );
}

export default About;
