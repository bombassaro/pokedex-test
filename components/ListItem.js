import {map} from 'lodash'
const ListItem = ({selectd, results, click, close, player}) => {
  const Items = () => map(results, (item, key) => {
    return (
      <div className="item" key={key} onClick={() => click(item.name)}>
        <p className="name">{item.name && item.name.toUpperCase()}</p>
      </div>
    )
  })
  return (
    <div className={`modal ${selectd ? `open` : `close`}`} onClick={() => close(0)}>
      <div className={`listview`}>
        <Items />
      </div>
    </div>
  )
}

export default ListItem