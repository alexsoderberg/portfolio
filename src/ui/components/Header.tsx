import type { JSX } from "react"
import NavBar from "./NavBar"
import LanguageToggle from "./LanguageToggle"
import type { Languages } from "../../data/Languages"

interface HeaderProps {
  setLanguage: (language: Languages) => void
}

/**
 * Component for header containing a nav bar.
 *
 * @returns {JSX.Element} - Header component
 */
const Header = ({setLanguage}: HeaderProps): JSX.Element => {
  return (
    <header className="flex justify-between items-center p-5 sticky w-85/100">
      <h1 className="text-2xl">Alex Söderberg</h1>
      <NavBar />
      <LanguageToggle setCurrentLanguage={setLanguage}/>
    </header>
  )
}

export default Header