import { Languages } from "../../data/Languages"
import useLanguage from "../../hooks/useLanguage"
import ProjectCard from "../components/ProjectCard"

const ProjectSection = () => {
  const { language } = useLanguage()

  return (
    <section id="projects" className="flex items-center flex-col gap-20">
      <h1 className="text-5xl">{language === Languages.SWEDISH ? "Projekt" : "Projects"}</h1>
      <div className="flex items-center gap-10 justify-center flex-col">
        <ProjectCard title={"Continuous Improvement Platform"} imgUrl={"https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} imgAlt={"pic"} stack={["React", "Spring Boot", "PostgreSQL", "Auth0"]} description="A tool for handling improvements of an active production environment. It allows users to create suggestions, and authorized users to handle those suggestions by moving them between stages and adding comments." />

        <ProjectCard title={"Movies REST API"} imgUrl={"https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} imgAlt={"pic"} stack={["React", "Spring Boot", "PostgreSQL", "Auth0"]} description="A tool for handling improvements of an active production environment. It allows users to create suggestions, and authorized users to handle those suggestions by moving them between stages and adding comments." />

        <ProjectCard title={"Continuous Improvement Platform"} imgUrl={"https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} imgAlt={"pic"} stack={["React", "Spring Boot", "PostgreSQL", "Auth0"]} description="A tool for handling improvements of an active production environment. It allows users to create suggestions, and authorized users to handle those suggestions by moving them between stages and adding comments." />
      </div>
    </section>
  )
}

export default ProjectSection