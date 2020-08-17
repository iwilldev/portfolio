import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import CodeProjects from './pages/CodeProjects';
import GameProjects from './pages/GameProjects';
import DesignProjects from './pages/DesignProjects';
import Contacts from './pages/Contacts';
import Links from './pages/Links';

import './App.css';


function App() {
  return (
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/about-me" component={About} exact />
        <Route path="/resume" component={Resume} exact />
        <Route path="/code-projects" component={CodeProjects} exact />
        <Route path="/game-projects" component={GameProjects} exact />
        <Route path="/design-projects" component={DesignProjects} exact />
        <Route path="/contacts" component={Contacts} exact />
        <Route path="/links" component={Links} exact />
      </BrowserRouter>
  );
}

export default App;
