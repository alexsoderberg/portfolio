import ProjectCard from "../components/ProjectCard"

const ProjectSection = () => {
  return (
    <section id="projects" className="flex items-center flex-col">
      <h1 className="text-2xl">Projects</h1>
      <ul className="flex">
        <li>
          <ProjectCard title={"Continuous Improvement Platform"} imgUrl={"https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} imgAlt={"pic"}/>
        </li>
        <li>Movies REST API</li>
        <li></li>
      </ul>
    </section>
  )
}

export default ProjectSection