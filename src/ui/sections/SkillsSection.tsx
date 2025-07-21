import { Languages } from "../../data/Languages"
import useLanguage from "../../hooks/useLanguage"
import SkillTag from "../components/SkillTag"

const SkillsSection = () => {
  const { language } = useLanguage()

  const frontEndSkills: string[] = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "MaterialUI", "Tailwind"]
  const backEndSkills: string[] = ["Java", "Spring Boot", "Node", "Express", "MongoDB", "PostgreSQL"]
  const otherSkills: string[] = ["Git", "Docker", "OOP", "Agile", "TDD", "JUnit", "Jest"]

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col gap-10">
        <h2 className="text-2xl sm:text-5xl text-center">
          {language === Languages.SWEDISH ? "Verktyg & Erfarenheter" : "Tools and Experiences"}
        </h2>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl">
            Front End
          </h3>
          <div>
            <ul className="flex flex-wrap gap-2">
              {frontEndSkills.map((skill) => {
                return (
                  <li>
                    <SkillTag skill={skill} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl">
            Back End
          </h3>
          <div>
            <ul className="flex flex-wrap gap-2">
              {backEndSkills.map((skill) => {
                return (
                  <li>
                    <SkillTag skill={skill} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl">
            Other
          </h3>
          <div>
            <ul className="flex flex-wrap gap-2">
              {otherSkills.map((skill) => {
                return (
                  <li>
                    <SkillTag skill={skill} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection