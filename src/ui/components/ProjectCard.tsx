interface ProjectCardProps {
  title: string;
  imgUrl: string;
  imgAlt: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="flex flex-col items-center border-xl border border-black rounded max-w-30/100">
      <h2 className="text-xl">{props.title}</h2>
      <img src={props.imgUrl} alt={props.imgAlt} className="object-fit"/>
    </div>
  )
}

export default ProjectCard