import React, { Component } from 'react'
import './styles/App.css'
import PokeList from './PokeList'
import DetailView from './DetailView'

class App extends Component {
  constructor () {
    super()
    this.state = {}
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick (id) {
    console.log(id)
  }

  render () {
    return (
      <div className='App' >
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView />
      </div>
    )
  }
}

export default App
