import { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import GithubStats from './Components/GithubStats'
import Contact from './Components/Contact'
import BottomNav from './Components/BottomNav'


function App() {
 

  return (
    <>
      
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <GithubStats/>
      <Contact />
      <BottomNav />
    </>
  )
}

export default App
