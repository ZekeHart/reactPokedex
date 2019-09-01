import React from 'react'
import './styles/DetailView.css'

const DetailView = ({ pokemon }) => {
  const { id, name, sprite, type, weight } = pokemon
  return (
    <section className='detail-view'>
      <img className='sprite-image' src={sprite} />
      <div className='data-wrapper'>
        <h1 className='data-name' >ID: {id} {name}</h1>
        <p className='data-char'>Type: {type}</p>
        <p className='data-char'>Weight: {weight}</p>
      </div>
    </section>
  )
}

export default DetailView
