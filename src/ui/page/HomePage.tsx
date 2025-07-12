import type { JSX } from "react"
import Portrait from "../components/Portrait"
import Contact from "../sections/ContactSection"
import AboutSection from "../sections/AboutSection"
import ProjectSection from "../sections/ProjectSection"
import SkillsSection from "../sections/SkillsSection"

/**
 * The starting page for the application.
 *
 * @returns {JSX.Element} - Starting page for the application. 
 */
const HomePage = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex justify-center flex-col min-h-screen items-center gap-10 md:flex-row md:justify-between">
        <p className="max-w-40/100">
          Fullstack-utvecklare med fokus på backend. Jag försöker ständigt förbättra kunskaper inom DevOps, Frontend och Backend.
        </p>
        <Portrait />
      </section>

      <AboutSection />
      <SkillsSection />
      <ProjectSection />


      <Contact />
    </div>
  )
}

export default HomePage