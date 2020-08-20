import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import Contacts from './pages/Contacts';

import './App.css';
import TemplateBar from './components/TemplateBar';


function App() {

  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about-me" component={About} exact />
          <Route path="/resume" component={Resume} exact />
          <Route path="/portfolio" component={Portfolio} exact />
          <Route path="/project" component={Project} />
          <Route path="/contacts" component={Contacts} exact />
          <Route component={() => (
            <>
              <TemplateBar/>
              <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: '#ddd'}}>
                <h1 style={{marginBottom: '1rem', marginTop: '1rem'}}>Página 404</h1>
                <p>
                  Acho que você se perdeu no caminho.
                  <br />
                  Clique no botão acima para voltar.
                </p>
              </div>
            </>
          )}
          />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
