interface Project {
  title: string
  description: string
  highlights: string[]
  repo: string
}

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <a className="project-card" href={project.repo} target="_blank" rel="noreferrer">
      <div className="card-header">
        <h3>{project.title}</h3>
      </div>
      <p>{project.description}</p>
      <ul>
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </a>
  )
}
