import { useState } from "react"
import { HashLink } from "react-router-hash-link"
import type { JSX } from "react"

/**
 * A main nav bar containting links to sub pages. 
 *
 * @returns {JSX.Element} - A navbar containing links
 */
const NavBar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav>
      {/* Desktop menu */}
      <ul className="hidden md:flex justify-end gap-10 list-none">
        <li><HashLink to="/" smooth>Start</HashLink></li>
        <li><HashLink to="/#about" smooth>About</HashLink></li>
        <li><HashLink to="/#projects" smooth>Projects</HashLink></li>
        <li><HashLink to="/#contact" smooth>Contact</HashLink></li>
      </ul>

      {/* Mobile hamburger icon */}
      <div className="md:hidden flex justify-end">
        <button onClick={toggleMenu} className="text-2xl flex flex-col gap-1 focus:outline-none">
        <span
            className={`w-8 h-1 bg-light rounded transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-8 h-1 bg-light rounded transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-8 h-1 bg-light rounded transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 list-none text-right">
          <li><HashLink to="/" smooth onClick={() => setIsOpen(false)}>Start</HashLink></li>
          <li><HashLink to="/#about" smooth onClick={() => setIsOpen(false)}>About</HashLink></li>
          <li><HashLink to="/#projects" smooth onClick={() => setIsOpen(false)}>Projects</HashLink></li>
          <li><HashLink to="/#contact" smooth onClick={() => setIsOpen(false)}>Contact</HashLink></li>
        </ul>
      )}
    </nav>
  )
}

export default NavBar
