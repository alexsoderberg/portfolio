import { NavLink } from "react-router-dom"

const NavBar = () => {
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