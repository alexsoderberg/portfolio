interface SkillTagProps {
  skill: string;
}

const SkillTag = ({ skill }: SkillTagProps) => {
  return (
    <div className="bg-background inline-block p-2">
      <p className="text-green-300">{skill}</p>
    </div>
  )
}

export default SkillTag