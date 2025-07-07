import { type JSX } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"

/**
 * Layout component that renders children components using Outlet. 
 *
 * @returns {JSX.Element} - A layout containing header and page content.
 */
const Layout = (): JSX.Element => {
  return (
    <div className="w-full p-5">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout