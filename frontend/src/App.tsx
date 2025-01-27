import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import DeckList from './components/DeckList'

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>

      <DeckList></DeckList>
    </>
  )
}

export default App
