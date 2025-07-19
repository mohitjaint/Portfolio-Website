import { useState } from 'react'
import Header from './components/Header/Header'
import profilePhoto from './assets/profile.jpg'
import About from './components/Cards/About'
import CpCard1 from './components/Cards/CP/CpCard1'
import CpCard2 from './components/Cards/CP/CpCard2'
import ProjectCard from './components/Cards/Projects/ProjectCard'
import ProjectPage from './components/Project/Projects'


function App() {

  
  
  return (
   <>
    <Header />

    <About />
    <CpCard1/>
    <CpCard2/>
    <ProjectPage/>
   </>

  )
}

export default App
