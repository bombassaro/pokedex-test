const Pokedex = require('pokedex-promise-v2');
const getList = (req, res) => {
  const P = new Pokedex()  
  return P.getPokemonsList()
    .then((response) => {
      return res.status(200).json(response)
    })
    .catch((error)  => {
      console.log('ERROR: ', error)
      return res.status(500).json(error)
    })
}
const getInfo = (req, res) => {
  const {id} = req.params
  const P = new Pokedex()  
  if(Number.isInteger(id)) {
    P.resource([`/api/v2/pokemon/${id}`])
      .then((response) => {
        return res.status(200).json(response)
      })
      .catch((error)  => {
        console.log('ERROR: ', error)
        return res.status(500).json(error)
      })
  } else {
    P.getPokemonByName(id)
      .then((response) => {
        return res.status(200).json(response)
      })
      .catch((error)  => {
        console.log('ERROR: ', error)
        return res.status(500).json(error)
      })
  }
}
module.exports = {getList, getInfo}