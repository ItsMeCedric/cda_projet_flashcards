import './Deck.css'
function Deck() {
  return (
    <div className='card'>
      <h3>Deck Title</h3>
      <img src='#' alt='vignette' />
      <p className='description'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae,
        rem. Esse tempore exercitationem nam reprehenderit minima quae magni,
      </p>
      <div className='icons'>
        <span>flag</span>
        <span>mark</span>
      </div>
    </div>
  )
}

export default Deck
