import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
      <h1>L'application qui va te faire apprendre tes cartes !</h1>
      <label htmlFor='search'>Rechercher</label>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search here for deck'
      />
    </div>
  )
}
export default Hero
