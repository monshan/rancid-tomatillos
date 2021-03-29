import './ReturnButton.css'

const ReturnButton = (props) => {
  return (
    <button className="returnButton" onClick={ props.deselect }>Go back!</button>
  )
}

export default ReturnButton