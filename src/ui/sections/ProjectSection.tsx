import { Languages } from "../../data/Languages"
import ProjectCard from "../components/ProjectCard"

interface ProjectSectionProps {
  language: Languages
}

const ProjectSection = ({language}: ProjectSectionProps) => {
  return (
    <section id="projects" className="min-h-100 flex items-center flex-col gap-20">
      <h1 className="text-5xl">{language === Languages.SWEDISH ? "Projekt" : "Projects"}</h1>
      <div className="flex items-center gap-10 justify-center flex-wrap">
        <ProjectCard title={"Continuous Improvement Platform"} imgUrl={"https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} imgAlt={"pic"} />

        <ProjectCard title={"Movies REST API"} imgUrl={"https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} imgAlt={"pic"} />

        <ProjectCard title={"Continuous Improvement Platform"} imgUrl={"https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} imgAlt={"pic"} />
      </div>
    </section>
  )
}

export default ProjectSection