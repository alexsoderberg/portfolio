interface ProjectCardProps {
  title: string;
  stack: string[],
  description: string,
  imgUrl: string;
  imgAlt: string;
}

const ProjectCard = ({ title, stack, description, imgUrl, imgAlt }: ProjectCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center border-xl border border-light rounded max-w-60/100 min-w-50 ">
      <div className="p-5">
        <h2 className="text-xl">{title}</h2>
        <div className="py-2">
          <p>Built using:</p>
          <ul className="flex flex-wrap gap-2 text-green-200">
            {stack.map((tool) => {
              return <li>{tool}</li>
            })}
          </ul>
        </div>
        <p>{description}</p>
      </div>
      <img src={imgUrl} alt={imgAlt} className="object-cover" />
    </div>
  )
}

export default ProjectCard