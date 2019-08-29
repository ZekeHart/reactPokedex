import React, { Component } from 'react'
import './styles/App.css'
import PokeList from './PokeList'
import DetailView from './DetailView'
import Pokemon from '../Pokemon'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      pokemon: {}
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  async handleOnClick (id) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)

    const pokemon = new Pokemon(response.data)

    this.setState({ pokemon })
  }

  render () {
    return (
      <div className='App' >
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    )
  }
}

export default App
