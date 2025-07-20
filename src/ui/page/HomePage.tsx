import type { JSX } from "react"
import Portrait from "../components/Portrait"
import Contact from "../sections/ContactSection"
import AboutSection from "../sections/AboutSection"
import ProjectSection from "../sections/ProjectSection"
import SkillsSection from "../sections/SkillsSection"
import { Languages } from "../../data/Languages"
import useLanguage from "../../hooks/useLanguage"

/**
 * The starting page for the application.
 *
 * @returns {JSX.Element} - Starting page for the application. 
 */
const HomePage = (): JSX.Element => {

  const { language } = useLanguage()

  const swedishDescription = "Fullstack-utvecklare på svenska. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam ultricies sollicitudin. Praesent sem urna, tincidunt eu quam in, ullamcorper placerat diam. Morbi a felis nisl. Suspendisse potenti. Maecenas dapibus consectetur urna. Vivamus dictum viverra dignissim. Praesent vehicula tempor neque, in ultrices lectus finibus non. Quisque sit amet ullamcorper risus. Donec volutpat pretium auctor. Aenean ac tellus ipsum. Vestibulum in sodales ex. Etiam erat nulla, tempor id dapibus vitae, varius in nisi. Morbi non nibh rutrum, placerat erat vel, ornare nunc."

  const englishDescription = "Fullstack-developer bla bla bla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam ultricies sollicitudin. Praesent sem urna, tincidunt eu quam in, ullamcorper placerat diam. Morbi a felis nisl. Suspendisse potenti. Maecenas dapibus consectetur urna. Vivamus dictum viverra dignissim. Praesent vehicula tempor neque, in ultrices lectus finibus non. Quisque sit amet ullamcorper risus. Donec volutpat pretium auctor. Aenean ac tellus ipsum. Vestibulum in sodales ex. Etiam erat nulla, tempor id dapibus vitae, varius in nisi. Morbi non nibh rutrum, placerat erat vel, ornare nunc."
  return (
    <div className="flex flex-col gap-10">
      <section className="flex justify-center flex-col min-h-screen items-center gap-40 md:flex-row md:justify-center">
        <p className="md:max-w-30/100">
          { language === Languages.SWEDISH ? swedishDescription : englishDescription}
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