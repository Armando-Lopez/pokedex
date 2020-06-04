import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import App from './pages/App';
import InfoPokemon from './pages/InfoPokemon'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/style.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route exact path="/" component={App} />
      <Route exact path="/infopokemon/:name" component={InfoPokemon} />
      </AnimatedSwitch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);