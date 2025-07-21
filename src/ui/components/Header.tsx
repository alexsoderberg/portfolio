import { useEffect, useState } from "react"
import type { JSX } from "react"
import NavBar from "./NavBar"

/**
 * Component for header containing a nav bar.
 *
 * @returns {JSX.Element} - Header component
 */
const Header = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen])

  return (
    <header
      className={`w-full px-5 py-4 sticky top-0 m-0 z-40 transition-colors duration-300 ${
        isOpen
          ? "bg-transparent shadow-none"
          : scrolled
          ? "bg-white/20 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className={`text-2xl ${scrolled || isOpen ? "text-primary" : "text-text"}`}>
          Alex Söderberg
        </h1>
        <NavBar isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} scrolled={scrolled} />
      </div>
    </header>
  )
}

export default Header
