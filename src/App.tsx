import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import Contacts from './pages/Contacts';

import './App.css';


function App() {

  return (
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/about-me" component={About} exact />
        <Route path="/resume" component={Resume} exact />
        <Route path="/portfolio" component={Portfolio} exact />
        <Route path="/project" component={Project} />
        <Route path="/contacts" component={Contacts} exact />
      </BrowserRouter>
  );
}

export default App;
