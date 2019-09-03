import React from 'react'
import './styles/DetailView.css'

const DetailView = ({ pokemon }) => {
  const { id, name, sprite, type, weight, height, pmi } = pokemon
  return (
    <section className='detail-view'>
      <img className='sprite-image' src={sprite} />
      <div className='data-wrapper'>
        <h2 className='data-name' >ID: {id} {name}</h2>
        <p className='data-char'>Type: {type}</p>
        <p className='data-char'>Weight: {weight}</p>
        <p className='data-char'>Height: {height}</p>
        <p className='data-char'> {(pmi > 30) ? 'C H O N K' : 'not that chonk'}</p>
      </div>
    </section>
  )
}

export default DetailView
