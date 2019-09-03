class Pokemon {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    this.sprite = data.sprites.front_default
    this.type = data.types[0].type.name
    this.weight = data.weight / 10
    this.height = data.height / 10
    this.pmi = (this.weight / (this.height * this.height)).toFixed(2)
  }
}

export default Pokemon
