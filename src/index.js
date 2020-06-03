import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './pages/App';
import InfoPokemon from './pages/InfoPokemon'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/infopokemon" component={InfoPokemon} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);