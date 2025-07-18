import { useState } from 'react'
import Header from './components/Header/Header'
import profilePhoto from './assets/profile.jpg'
import About from './components/Cards/About'
import CpCard1 from './components/Cards/CP/CpCard1'
import CpCard2 from './components/Cards/CP/CpCard2'
import ProjectCard from './components/Cards/Projects/ProjectCard'

function App() {

  
  
  return (
   <>
    <Header />

    <About />
    <CpCard1/>
    <CpCard2/>
    <ProjectCard/>
   </>

  )
}

export default App
