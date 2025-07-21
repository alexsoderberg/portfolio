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
    <div className="flex flex-col items-center bg-background bg-linear-to-br from-secondary to-background text-text font-quicksand pb-15">
      <Header />
      <main className="max-w-full flex flex-col items-center p-5">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout