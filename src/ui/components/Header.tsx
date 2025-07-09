import type { JSX } from "react"
import NavBar from "./NavBar"

/**
 * Component for header containing a nav bar.
 *
 * @returns {JSX.Element} - Header component
 */
const Header = (): JSX.Element => {
  return (
    <header className="flex justify-between items-center p-5 sticky w-85/100">
      <h1 className="text-2xl">Alex Söderberg</h1>
      <NavBar />
    </header>
  )
}

export default Header