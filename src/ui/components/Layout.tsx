import { type JSX } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import type { Languages } from "../../data/Languages"

interface LayoutProps {
  language: Languages
  setLanguage: (language: Languages) => void
}

/**
 * Layout component that renders children components using Outlet. 
 *
 * @returns {JSX.Element} - A layout containing header and page content.
 */
const Layout = ({language, setLanguage}: LayoutProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center bg-background bg-linear-to-br from-secondary to-background text-text font-quicksand pb-15">
      <div className="flex flex-col items-center p-5">
        <Header language={language} setLanguage={setLanguage}/>
        <main className="max-w-full">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout