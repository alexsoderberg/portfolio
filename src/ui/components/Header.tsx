import type { JSX } from "react"
import NavBar from "./NavBar"

/**
 * Component for header containing a nav bar.
 *
 * @returns {JSX.Element} - Header component
 */
const Header = (): JSX.Element => {
  return (
    <header className="flex justify-between items-baseline p-5 sticky w-full sm:max-w-90/100">
      <h1 className="text-2xl">Alex Söderberg</h1>
      <div className="flex gap-10 sm:flex-row">
        <NavBar />
      </div>
    </header>
  )
}

export default Header