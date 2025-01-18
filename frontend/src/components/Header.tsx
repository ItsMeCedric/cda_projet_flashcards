import logo from '../assets/FlashMcCard.png'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt='logo' className='logo' />
      <div className='navbar'>
        <a href='#'>Home</a>
        <span>|</span>
        <a href='#'>Explore</a>
        <span>|</span>
        <a href='#'>Contact Us</a>
      </div>
      <a href='#' className='login'>
        Login
      </a>
    </div>
  )
}

export default Header
