import './App.css'
import { Routes, Route } from 'react-router'

import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/login' element={<Login></Login>} />
      <Route path='/signin' element={<SignIn></SignIn>} />
    </Routes>
  )
}

export default App
