import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TemplateBar from './components/TemplateBar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Web from './pages/Web';
import Design from './pages/Design';
import Project from './pages/Project';
import Contacts from './pages/Contacts';

import './App.css';



function App() {

  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about-me" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/web" component={Web} />
          <Route path="/design" component={Design} />
          <Route path="/project" component={Project} />
          <Route path="/contacts" component={Contacts} />
          <Route component={() => (
            <>
              <TemplateBar/>
              <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: '#ddd'}}>
                <h1 style={{marginBottom: '1rem', marginTop: '1rem'}}>Página 404</h1>
                <p>
                  Acho que você se perdeu no caminho.
                  <br />
                  Use o menu para voltar.
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
