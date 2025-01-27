import logo from '../assets/FlashMcCard.png'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt='logo' className='logo' />
      <div className='navbar'>
        <NavLink to={'/'}>Home</NavLink>
        <span>|</span>
        <NavLink to={'/'}>Explore</NavLink>
        <span>|</span>
        <NavLink to={'/'}>Contact Us</NavLink>
      </div>
      <div className='auth-btn'>
        <NavLink className={'login'} to={'/login'}>
          Login
        </NavLink>
        <NavLink className={'login'} to={'/signin'}>
          Sign In
        </NavLink>
      </div>
    </div>
  )
}

export default Header
