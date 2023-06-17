import './index.css'

const Images = props => {
  const {second, mix, stating} = props
  const {id, name, imageUrl, isVisited} = second

  const clickingonremove = () => {
    mix(id)
  }

  const viewCountry = () => {
    if (isVisited) {
      return (
        <li className="lista">
          <img src={imageUrl} className="flagphoto" alt="thumbnail" />
          <div className="below">
            <p>{name}</p>
            <button onClick={clickingonremove}>Remove</button>
          </div>
        </li>
      )
    }
    return null
  }

  return <div>{viewCountry()}</div>
}

export default Images
