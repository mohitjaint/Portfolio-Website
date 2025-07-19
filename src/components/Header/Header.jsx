import { useState, useEffect } from 'react'

function Header() {
  const [activeButton, setActiveButton] = useState('about')

  useEffect(() => {
    const sectionIds = ['about', 'cp', 'projects', 'connect']

    const handleScroll = () => {
      const scrollY = window.scrollY
      let current = 'about' // default
      
      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (section) {
          const offsetTop = section.offsetTop
          const offsetHeight = section.offsetHeight

          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            current = id
          }
        }
      }

      setActiveButton(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const buttons = [
    { id: 'about', label: 'About' },
    { id: 'cp', label: 'Competitive Programming' },
    { id: 'projects', label: 'Projects' },
    { id: 'connect', label: 'Connect' }
  ]

  return (
    <div className='sticky top-0 z-50 bg-[color:#1A0B2E] font-sans text-white text-left flex h-16 items-center'>
      <p className='flex-[1.5] flex gap-1 text-[#9857D3] font-bold text-2xl p-4'>&lt; <p className='text-white'> Mohit</p> &gt;</p>

      <div className='flex justify-between flex-[2] text-[20px] p-4 gap-4'>
        {buttons.map(button => (
          <button
            key={button.id}
            onClick={() => {
              document.getElementById(button.id)?.scrollIntoView({ behavior: 'smooth' })
              setActiveButton(button.id)
            }}
            className={`p-2 rounded-xl delay-100 transition-all duration-300 ease-in-out 
              ${activeButton === button.id
                ? 'bg-gray-100 text-[#1A0B2E] font-semibold'
                : 'text-white hover:shadow-[0_0_10px_#ffffff]'}
            `}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Header
