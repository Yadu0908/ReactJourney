import { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import GithubStats from './Components/GithubStats'


function App() {
 

  return (
    <>
      
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <GithubStats/>
    </>
  )
}

export default App
