import { HashLink } from "react-router-hash-link"
import type { JSX } from "react"
import { Languages } from "../../data/Languages"
import LanguageToggle from "./LanguageToggle"
import useLanguage from "../../hooks/useLanguage"

type NavBarProps = {
  isOpen: boolean
  toggleMenu: () => void
  scrolled: boolean
}

const menuItems = [
  { to: "/#top", key: "start", textSwe: "Start", textEng: "Start" },
  { to: "/#about", key: "about", textSwe: "Om", textEng: "About" },
  { to: "/#projects", key: "projects", textSwe: "Projekt", textEng: "Projects" },
  { to: "/#contact", key: "contact", textSwe: "Kontakt", textEng: "Contact" },
]

const NavBar = ({ isOpen, toggleMenu, scrolled }: NavBarProps): JSX.Element => {
  const { language } = useLanguage()

  return (
    <nav className="flex items-center relative">
      {/* Desktop menu */}
      <ul className="hidden md:flex gap-10 list-none text-text">
        {menuItems.map(({ to, key, textSwe, textEng }) => (
          <li key={key}>
            <HashLink to={to} smooth className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full">
              {language === Languages.SWEDISH ? textSwe : textEng}
            </HashLink>
          </li>
        ))}
        <li className="mx-10"><LanguageToggle /></li>
      </ul>

      {/* Hamburger knapp fixed, ändrar färg efter bakgrund */}
      <button
        onClick={toggleMenu}
        className={`md:hidden z-[110] flex flex-col gap-1 focus:outline-none ml-4 ${scrolled && "text-primary"
          } ${scrolled && isOpen ? "text-text" : undefined }`}
        aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
      >
        <span
          className={`w-8 h-1 rounded transition-transform duration-300 bg-current ${isOpen ? "rotate-45 translate-y-2" : ""
            }`}
        />
        <span
          className={`w-8 h-1 rounded transition-opacity duration-300 bg-current ${isOpen ? "opacity-0" : ""
            }`}
        />
        <span
          className={`w-8 h-1 rounded transition-transform duration-300 bg-current ${isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
        />
      </button>

      {/* Overlay för mobilmeny */}
      {
        isOpen && (
          <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm text-xl flex flex-col items-center justify-center">
            <ul className="flex flex-col gap-6 items-center justify-center">
              {menuItems.map(({ to, key, textSwe, textEng }) => (
                <li key={key}>
                  <HashLink to={to} smooth onClick={toggleMenu}>
                    {language === Languages.SWEDISH ? textSwe : textEng}
                  </HashLink>
                </li>
              ))}
              <li><LanguageToggle /></li>
            </ul>
          </div>
        )
      }
    </nav >
  )
}

export default NavBar
