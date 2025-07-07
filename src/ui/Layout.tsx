import { type JSX } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"

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