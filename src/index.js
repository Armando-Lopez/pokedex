import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import App from './pages/App';
import InfoPokemon from './pages/InfoPokemon';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
        <Route exact path="/" component={App} />
        <Route exact path="/infopokemon/:name" component={InfoPokemon} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AnimatedSwitch />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
