interface ProjectCardProps {
  title: string;
  imgUrl: string;
  imgAlt: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center border-xl border border-light rounded max-w-40/100 min-w-50">
      <h2 className="text-xl h-20 p-5">{props.title}</h2>
      <img src={props.imgUrl} alt={props.imgAlt} className="object-cover"/>
    </div>
  )
}

export default ProjectCard