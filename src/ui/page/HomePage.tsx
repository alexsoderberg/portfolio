import type { JSX } from "react"
import Portrait from "../components/Portrait"
import Footer from "../components/Footer"

/**
 * The starting page for the application.
 *
 * @returns {JSX.Element} - Starting page for the application. 
 */
const HomePage = (): JSX.Element => {
  return (
    <>
      <main id="card-container" className="flex gap-20 flex-col">
        <div className="flex justify-between items-center mx-50">
          <p>hej</p>
          <Portrait />
        </div>

        <div className="flex gap-20 justify-around">
          <div>
            <h2 className="text-xl">about</h2>
            <p>This is a section about me</p>
          </div>
          <div>
            <h2 className="text-xl">Current</h2>
            <p>This is what i am currently working on</p>
          </div>
          <div>
            <h2 className="text-xl">skills</h2>
            <p>This is what i am able to do</p>
          </div>
        </div>

        <div className="flex flex-col items-center ">
          <h2 className="text-xl">Former work</h2>
          <div>
            <p>Högskoleexamen webbprogrammering Linneuniversitetet</p>
            <p>i have created a few apps that makes some things</p>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

export default HomePage