import { useState } from 'react'
import './App.css'
import Images from './Images'
import Navbar from './components/navbar'
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
