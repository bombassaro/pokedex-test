import {map} from 'lodash'
const Player = ({n, player, change}) => {
  const {base_experience, height, weight, name, stats, sprites} = player
  const Image = () => sprites ? <img className="image" src={sprites.front_default} /> : ``
  const Attribute = ({label, value}) => {
    return (
      <li>
        <span className="label">{label}</span>
        <span className="value">{value}</span>
      </li>
    )
  }
  const ListStats = () => map(stats, (item, key) => <Attribute key={key} label={item.stat.name} value={item.base_stat} />)
  return (
    <div className="item">
      <div className="card">
        <div className="title">
          <h1>{name && name.toUpperCase()}</h1>
          <Image />
        </div>
        <div className="attributes">
          <ListStats />
          <Attribute label="HEIGHT" value={height} />
          <Attribute label="WEIGHT" value={weight} />
          <Attribute label="XP" value={base_experience} />
        </div>
      </div>
      <div className="button" onClick={() => location.reload()}>TROCAR</div>
      <div className="button" onClick={() => change(n)}>SELECIONAR</div>
    </div>
  )
}
export default Player