const {root} = require('../config')
const loadPokemon = async (id, callback) => {
  const res = await fetch(`${root}/api/info/${id}`, {
    'headers': {'Content-Type': 'application/json'},
    'method': 'GET'
  })
  if(res.ok) {
    const content = await res.json()
    const {abilities, base_experience, height, name, sprites, stats, weight} = content
    const item = {abilities, base_experience, height, name, sprites, stats, weight}
    callback(item)
  } else {
    // todo catch error
  }
}

const loadItems = async () => {
  const _data = await fetch(`${root}/api/list`, {
    'headers': {'Content-Type': 'application/json'},
    'method': 'GET'
  })
  const content = await _data.json()
  return content
}

const randomLoad = async () => {
  const randomNumber1 = Math.floor(Math.random()*101)
  const randomNumber2 = Math.floor(Math.random()*101)
  let loadPoke1 = {}
  let loadPoke2 = {}
  await loadPokemon(randomNumber1, (result) => loadPoke1 = result)
  // await loadPokemon(randomNumber2, (result) => loadPoke2 = result)
  return {loadPoke1, loadPoke2}
}

export {loadPokemon, loadItems, randomLoad}