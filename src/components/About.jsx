function About() {
  const workExperience = [
    {
      company: "General Motors",
      role: "Operations Data Analyst",
      description: "Predictive Cost Modeling, Resource Forecasting & Data Tools",
      date: "2025–Present"
    },
    {
      company: "General Motors",
      role: "Software Engineering Intern",
      description: "Workflow Automation, Process Optimization, CI/CD Pipelines",
      date: "2024"
    },
    {
      company: "Hubbell Incorporated",
      role: "Embedded Software Developer Intern",
      description: "Rust Development, Data Handling, Embedded Systems",
      date: "2023"
    }
  ]

  const education = [
    {
      school: "Carnegie Mellon University",
      degree: "Bachelor of Science in Electrical and Computer Engineering",
      concentration: "Software Systems Concentration",
      date: "2021-2025"
    }
  ]

  return (
    <>
      <div className="experience-section">
        <h3 className="subsection-title">Work</h3>
        <div className="experience-list">
          {workExperience.map((job, index) => (
            <div key={index} className="experience-item">
              <div className="experience-left">
                <span className="experience-company">{job.company}</span>
                <span className="experience-role">{job.role}</span>
                {job.description && <span className="experience-description">{job.description}</span>}
              </div>
              <div className="experience-right">
                <span className="experience-date">{job.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="experience-section">
        <h3 className="subsection-title">Education</h3>
        <div className="experience-list">
          {education.map((edu, index) => (
            <div key={index} className="experience-item">
              <div className="experience-left">
                <span className="experience-company">{edu.school}</span>
                <span className="experience-role">{edu.degree}</span>
                {edu.concentration && <span className="experience-concentration">{edu.concentration}</span>}
              </div>
              <div className="experience-right">
                <span className="experience-date">{edu.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default About
