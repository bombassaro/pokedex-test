import React from 'react'
import Player from './Player'
import ListItem from './ListItem'
import {loadPokemon} from './actions'
const Container = ({content, randomP}) => {
  if(!content || !randomP) return false
  const {results} = content
  const {loadPoke1} = randomP
  const [selectd, setSelectd] = React.useState(0)
  const [playerA, setPlayerA] = React.useState(loadPoke1)
  const [loading, setLoading] = React.useState(false)
  const handleClick = (name) => {
    setLoading(true)
    loadPokemon(name, (result) => {
      setPlayerA(result)
      setLoading(false)
      setSelectd(0)
    })
  }
  if(loading) {
    return (
      <div className="container">
        <img className="logo" src="/static/logo.png" />
        <p>Loading</p>
      </div>
    )
  }
  return (
    <div className="container">
      <img className="logo" src="/static/logo.png" />
      <Player n={1} player={playerA} change={setSelectd} />
      <ListItem selectd={selectd} player={selectd} close={setSelectd} click={handleClick} results={results} />
    </div>
  )
}
export default Container