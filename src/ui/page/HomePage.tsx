import type { JSX } from "react"
import Contact from "../sections/ContactSection"
import AboutSection from "../sections/AboutSection"
import ProjectSection from "../sections/ProjectSection"
import SkillsSection from "../sections/SkillsSection"
import IntroSection from "../sections/IntroSection"

/**
 * The starting page for the application.
 *
 * @returns {JSX.Element} - Starting page for the application. 
 */
const HomePage = (): JSX.Element => {
  
  return (
    <div className="flex flex-col gap-100">
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <Contact />
    </div>
  )
}

export default HomePage