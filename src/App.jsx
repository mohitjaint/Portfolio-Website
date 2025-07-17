import { useState } from 'react'
import './App.css'

function App() {
  const [activeButton, setActiveButton] = useState(null)
  
  
  return (
   <>
    <div className='bg-[color:#1A0B2E] font-sans text-white text-left    flex  h-[80px] items-center'>
    <p className='flex-[1.5] text-[30px] p-4'>&lt; Mohit &gt;</p> 

    <div className='flex justify-between flex-[2] text-[20px] p-4'>
      <button 
      key={'about'}
      onClick={()=>setActiveButton('about')}
      className={`p-2 rounded-xl delay-100    transition-all duration-300 ease-in-out 
          ${activeButton === 'about' 
          ? 'bg-gray-100 text-[#1A0B2E] ' 
          : 'text-white hover:shadow-[0_0_10px_#ffffff]'}
          `}
      >About</button>
      <button
      key={'cp'}
      onClick={()=>setActiveButton('cp')}
      className={`p-2 rounded-xl delay-100    transition-all duration-300 ease-in-out 
          ${activeButton === 'cp' 
          ? 'bg-gray-100 text-[#1A0B2E] ' 
          : 'text-white hover:shadow-[0_0_10px_#ffffff]'}
          `}
      >Competitive Programming</button>

      <button
      key={'projects'}
      onClick={()=>setActiveButton('projects')}
      className={`p-2 rounded-xl delay-100    transition-all duration-300 ease-in-out 
          ${activeButton === 'projects' 
          ? 'bg-gray-100 text-[#1A0B2E] ' 
          : 'text-white hover:shadow-[0_0_10px_#ffffff]'}
          `}
      >Projects</button>
      <button
      key={'connect'}
      onClick={()=>setActiveButton('connect')}
      className={`p-2 rounded-xl delay-100    transition-all duration-300 ease-in-out 
          ${activeButton === 'connect' 
          ? 'bg-gray-100 text-[#1A0B2E] ' 
          : 'text-white hover:shadow-[0_0_10px_#ffffff]'}
          `}
      >Connect</button>
    </div>
    </div>
    
   </>

  )
}

export default App
