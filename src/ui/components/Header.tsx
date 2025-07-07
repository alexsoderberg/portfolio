import type { JSX } from "react"
import NavBar from "./NavBar"

/**
 * Component for header containing a nav bar.
 *
 * @returns {JSX.Element} - Header component
 */
const Header = (): JSX.Element => {
  return (
    <div className="flex justify-between">
      <p>Header</p>
      <NavBar />
    </div>
  )
}

export default Header