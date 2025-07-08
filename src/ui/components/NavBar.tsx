import type { JSX } from "react"
import { HashLink } from "react-router-hash-link"


/**
 * A main nav bar containting links to sub pages. 
 *
 * @returns {JSX.Element} - A navbar containing links
 */
const NavBar = (): JSX.Element => {
  return (
    <nav>
      <ul className='flex justify-end gap-20 list-none'>
        <li>
          <HashLink to="/" smooth>Start</HashLink>
        </li>
        <li>
          <HashLink to="/#about" smooth>About</HashLink>
        </li>
        <li>
          <HashLink to="/#contact" smooth>Contact</HashLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar