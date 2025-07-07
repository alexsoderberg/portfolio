import type { JSX } from "react"
import NavBar from "./NavBar"

/**
 * Component for header containing a nav bar.
 *
 * @returns {JSX.Element} - Header component
 */
const Header = (): JSX.Element => {
  return (
    <div className="flex justify-between p-5 mx-50">
      <h1 className="text-2xl">Alex Söderberg</h1>
      <NavBar />
    </div>
  )
}

export default Header