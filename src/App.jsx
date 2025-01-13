import { useState } from 'react'
import './App.css'
import Images from './components/Images'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div>
      <Navbar/>
      <Images/>
      <Footer/>
    </div>
    </>
  )
}

export default App
