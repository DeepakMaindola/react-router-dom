import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
