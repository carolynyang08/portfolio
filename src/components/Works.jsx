import ProjectCard from './ProjectCard'

function Works() {
  const projects = [
    {
      year: "2025",
      title: "Cyclify",
      description: "iOS app for real-time cycling posture feedback.",
      skills: ["Swift", "Core Bluetooth", "AVFoundation", "SwiftData"],
      links: {
        github: "https://github.com/carolynyang08/Cyclify",
        website: "https://course.ece.cmu.edu/~ece500/projects/s25-teamc4/"
      }
    },
    // {
    //   year: "2024",
    //   title: "Journey Jotter",
    //   description: "Full-stack collaborative trip planner.",
    //   skills: ["Django", "Full-Stack", "MySQL", "Python"],
    //   links: {
    //     github: "https://github.com/carolynyang08/17437-JourneyJotter"
    //   }
    // },
  ]

  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          year={project.year}
          title={project.title}
          description={project.description}
          skills={project.skills}
          links={project.links}
        />
      ))}
    </div>
  )
}

export default Works
