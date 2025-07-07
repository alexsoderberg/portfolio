import type { JSX } from "react"
import { NavLink } from "react-router-dom"

/**
 * A main nav bar containting links to sub pages. 
 *
 * @returns {JSX.Element} - A navbar containing links
 */
const NavBar = (): JSX.Element => {
  return (
    <nav>
      <ul className='flex justify-end gap-20 list-none'>
        <NavLink to="/">Start</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="#">Dig</NavLink>
        <NavLink to="#">Igen</NavLink>
      </ul>
    </nav>
  )
}

export default NavBar