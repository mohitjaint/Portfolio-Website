import Header from './components/Header/Header'
import ProjectPage from './components/Project/Projects'
import CPsection from './components/CP/CPsection'
import AboutSection from './components/About/AboutSection'
import ContactSection from './components/Contact/ContactSection'


function App() {
  
  return (
   <>
   <Header />
<section  id="about">
  <AboutSection/>
</section>
<section id='cp' className='scroll-mt-16'>
    <CPsection/>
</section>
  

<section className='scroll-mt-16' id="projects">
  <ProjectPage/>
</section>
<section id="connect">
  <ContactSection/>
</section>

   </>

  )
}

export default App
