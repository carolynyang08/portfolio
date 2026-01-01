import { FaGithub, FaGlobe } from 'react-icons/fa'

function ProjectCard({ year, title, description, skills, links }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <span className="project-year">{year}</span>
        <div className="project-icons">
          {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="project-icon-link">
              <FaGithub />
            </a>
          )}
          {links.website && (
            <a href={links.website} target="_blank" rel="noopener noreferrer" className="project-icon-link">
              <FaGlobe />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>

      {skills && (
        <div className="project-skills">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectCard
