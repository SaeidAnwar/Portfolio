import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Projects from './components/Pojects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Portfolio />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
