const workExperience = [
  { company: 'General Motors', role: 'AI Quality Engineer', description: 'Leading the development of an LLM-based system to tackle ~$4B in annual warranty spend. Partnering with business stakeholders, IT, and architects at Microsoft/Databricks to transform legacy processes at GM into a modern AI strategy that detects vehicle defects faster, more accurately, and at scale.', date: 'March 2026 – Present', skills: ['AI Strategy & Roadmapping', 'LLMs', 'Databricks', 'Cross-functional Coordination', 'Technical Project Management'] },
  { company: 'General Motors', role: 'Engineering Operations Data Scientist', description: 'Optimized a $120M budget by building a driver-based forecasting system that cut estimation error from 30% to 15%. Developed an Azure-hosted app for real-time scenario planning and spend tracking.', date: 'July 2025 – March 2026', skills: ['Driver-Based Modeling', 'Full-Stack (Python/SQL)', 'Stakeholder Presentations', 'Process Optimization'] },
  { company: 'General Motors', role: 'Software Engineering Intern', description: 'Developed automation tooling that reduced a 30-minute software setup process to 2 minutes, standardizing the workflow across three engineering teams. Presented the solution to 75+ engineers.', date: 'May 2024 - August 2024', skills: ['Workflow Automation', 'Process Standardization'] },
  { company: 'Hubbell Incorporated', role: 'Embedded Software Developer Intern', description: 'Developed real-time Rust firmware for MCU sensor data collection, optimizing for performance.', date: 'May 2023 - August 2023', skills: ['Rust', 'Embedded Systems', 'Real-Time Data Processing'] },
]

const education = [
  {
    school: 'Carnegie Mellon University',
    degree: 'B.S. Electrical & Computer Engineering',
    concentration: 'Software Systems Concentration',
    date: 'August 2021 – May 2025',
  },
]

function Entry({ left, right, divider = true }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr auto',
      gap: '2rem', alignItems: 'start',
      padding: '1.6rem 0',
      borderBottom: divider ? '1px solid var(--rule)' : 'none',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>{left}</div>
      <div style={{ fontSize: '0.95rem', color: 'var(--ink)', whiteSpace: 'nowrap', paddingTop: '0.1rem' }}>{right}</div>
    </div>
  )
}

function About() {
  return (
    <div style={{ maxWidth: 950 }}>
      {/* Education */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{
          fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--ink-light)', marginBottom: '1.25rem',
          paddingBottom: '0.75rem', borderBottom: '1px solid var(--rule)',
        }}>Education</div>
        {education.map((e, i) => (
          <Entry key={i} right={e.date} divider={false} left={
            <>
              <span style={{ fontSize: '1.15rem', fontWeight: 500 }}>{e.school}</span>
              <span style={{ fontSize: '1.05rem', color: 'var(--ink)', fontWeight: 400 }}>{e.degree}</span>
              {e.concentration && <span style={{ fontSize: '0.95rem', color: 'var(--ink-light)', fontWeight: 300 }}>{e.concentration}</span>}
            </>
          } />
        ))}
      </div>

      {/* Work */}
      <div>
        <div style={{
          fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--ink-light)', marginBottom: '1.25rem',
          paddingBottom: '0.75rem', borderBottom: '1px solid var(--rule)',
        }}>Work</div>
        {workExperience.map((j, i) => (
          <Entry key={i} right={j.date} divider={false} left={
            <>
              <span style={{ fontSize: '1.15rem', fontWeight: 500 }}>{j.company}</span>
              <span style={{ fontSize: '1.05rem', color: 'var(--ink)', fontWeight: 400 }}>{j.role}</span>
              {j.description && <span style={{ fontSize: '0.95rem', color: 'var(--ink-light)', fontWeight: 300 }}>{j.description}</span>}
              {j.skills && (
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  {j.skills.map((s, k) => (
                    <span key={k} style={{
                      padding: '0.2rem 0.6rem',
                      border: '1px solid var(--rule)',
                      borderRadius: 3,
                      fontSize: '0.75rem',
                      color: 'var(--ink-light)',
                      letterSpacing: '0.03em',
                    }}>{s}</span>
                  ))}
                </div>
              )}
            </>
          } />
        ))}
      </div>
    </div>
  )
}

export default About
