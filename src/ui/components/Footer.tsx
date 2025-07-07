import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="flex justify-center">
      This is a footer
      <nav>
        <ul>
          <li>
            <Link to="linkedin.com">Linked in</Link>
            <Link to="github.com">github</Link>
            <Link to="soderberg.alex@outlook.com">mail</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Footer