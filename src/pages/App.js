import React, { Component } from 'react';
import SearchPokemons from '../components/SearchPokemons';
import axios from 'axios'
import Container from '../components/ContainerPokemon'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    }
    this._getInputValue = this._getInputValue.bind(this);
  }

  componentDidMount() {

  }

  _getInputValue(e) {
    console.log(e.target.value);

  }

  render() {
    return (
      <div className="App">
        <SearchPokemons onKeyUp={this._getInputValue} />
        <Container />
      </div>
    );
  }
}

export default App;