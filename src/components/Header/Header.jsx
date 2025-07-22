import { useState, useEffect } from 'react'

function Header() {
  const [activeButton, setActiveButton] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sectionIds = ['about', 'cp', 'projects', 'connect']

    const handleScroll = () => {
      const scrollY = window.scrollY
      let current = 'about'

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

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActiveButton(id)
    setMenuOpen(false) // close menu after click (on mobile)
  }

  return (
    <div className="sticky top-0 z-50 bg-[#1A0B2E] font-sans text-white text-left flex flex-wrap items-center justify-between px-4 py-3">
      {/* Logo */}
      <div className="flex items-center text-2xl font-bold gap-1 text-[#9857D3]">
        &lt; <span className="text-white">Mohit</span> &gt;
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-4 text-[18px]">
        {buttons.map(button => (
          <button
            key={button.id}
            onClick={() => handleClick(button.id)}
            className={`p-2 rounded-xl transition-all duration-300 ease-in-out
              ${activeButton === button.id
                ? 'bg-gray-100 text-[#1A0B2E] font-semibold'
                : 'text-white hover:shadow-[0_0_10px_#ffffff]'}
            `}
          >
            {button.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="w-full mt-2 md:hidden flex flex-col gap-2">
          {buttons.map(button => (
            <button
              key={button.id}
              onClick={() => handleClick(button.id)}
              className={`p-2 rounded-xl transition-all duration-300 ease-in-out text-left
                ${activeButton === button.id
                  ? 'bg-gray-100 text-[#1A0B2E] font-semibold'
                  : 'text-white hover:bg-[#2c1b42]'}
              `}
            >
              {button.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Header
