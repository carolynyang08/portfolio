import { useState } from 'react'
import ProjectModal from './ProjectModal'

const IconGitHub = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const IconGlobe = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

/**
 * ─── ADD YOUR PROJECTS HERE ──────────────────────────────────────────────────
 *
 * Each project can have:
 *   year, title, description, skills[], github, website   (all optional except title)
 *   caseStudy: { why, problem, process, tradeoffs, learned }  — any fields optional
 *
 * If a project has a caseStudy, a "Learn More" button appears on the card
 * and clicking the card opens a full modal with all the content.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const forFunProjects = [
  {
    year: '2026',
    date: '3/21/26',
    title: 'Keeping Up With AI: Google AI Studio',
    subtitle: 'I found out about it at an airport. I had an app deployed by the time I landed.',
    description: 'I found out about it at an airport. I had an app deployed by the time I landed.',
    skills: ['Google AI Studio', 'Firebase'],
    website: 'https://bitplot.firebaseapp.com/',
    article: 'https://medium.com/@carolynyang08/from-hand-crafted-wireframes-to-building-a-full-app-at-20-000-feet-8fcd8ba29b36',
    image: `${import.meta.env.BASE_URL}flight-bitplot.png`,
    image2: `${import.meta.env.BASE_URL}bitplot_screenshot.png`,
    body: [
      "One of my personal goals is to keep up with the latest AI advancements. The pace right now is exponential, something new dropping every week. X is honestly one of the best places to stay on top of it.",
      "My flight got delayed back in March this year and I was sitting at the airport scrolling X when my entire feed was talking about Google AI Studio. Google had just dropped it. Free. I opened it on the spot.",
      "I admire design, so naturally I wanted to try it. I had an idea of a productivity tracker so I quickly typed a prompt. I also attached a reference image I liked, and that made all the difference on giving me a great starting point. By the time we hit cruising altitude I had a full app UI for a habit tracker I'd been sitting on. Before landing, I had set up my database, and deployed a working version to the web.",
      "The barrier between an idea and a working prototype has basically collapsed, and I think a lot of people still don't realize that some of these tools are free and at their fingertips.",
      "I'm in awe of what's available right now - and genuinely curious, maybe even a little worried, about what this means for the future of design",
    ],
    video: `${import.meta.env.BASE_URL}bitplot-demo.mp4`,
  },
]

const projects = [
  {
    year: '2025',
    title: 'Cyclify',
    context: 'Carnegie Mellon Electrical & Computer Engineering Capstone',
    video: `${import.meta.env.BASE_URL}cyclify-demo.mp4`,
    image: `${import.meta.env.BASE_URL}cyclify.jpg`,
    image2: `${import.meta.env.BASE_URL}cyclify-diagrams.png`,
    description: 'iOS app for real-time cycling posture feedback.\n3rd place at the CMU ECE Capstone Showcase.',
    skills: ['Swift', 'Core Bluetooth', 'AVFoundation', 'SwiftData'],
    github: 'https://github.com/carolynyang08/Cyclify',
    website: 'https://course.ece.cmu.edu/~ece500/projects/s25-teamc4/',
    caseStudy: {
      problem: "Cycling is one of the most common forms of exercise, yet most riders have no way to get real-time feedback on their form. Studies suggest that if you cycle regularly, you're statistically likely to deal with an overuse injury — 85% of cyclists report at least one per year, and 36% of those require medical treatment. Professional bike fittings can help, but at $250 to $500 a session they're a one-time fix in a controlled environment, with no adaptation for fatigue or terrain.\n\nI experienced this firsthand training for my first sprint triathlon. I was a relative newcomer to cycling and something felt wrong during my rides but I had no way to identify it in the moment. That gap became the project.",
      process: "Cyclify is a real-time cycling posture coaching system that mounts to any bike and pairs with an iOS app. Using pressure sensors across the saddle and handlebars alongside a frame-mounted knee-tracking camera, it detects weight distribution and alignment issues mid-ride and delivers immediate audio and visual feedback. No stopping, no post-ride guesswork. A guided calibration flow personalizes thresholds to each rider in under 8 minutes.",
      decisions: [
        { title: "Speed over sophistication: custom algorithms instead of AI", content: "We considered using ML models for posture detection, which would have improved classification in theory. But ML introduces processing delay, and for feedback to actually change behavior mid-ride, it needs to arrive in under 500ms, preferably less. We built custom mathematical algorithms instead, trading theoretical accuracy for the real-time performance the use case demanded." },
        { title: "Two processors instead of one", content: "We evaluated running everything on a single high-powered board versus splitting the workload across two smaller ones. The single-board option was simpler to build but consumed nearly twice the power. The dual-processor approach cut power draw by 46% and extended battery life by 70% — a worthwhile complexity trade-off for a device that needs to last a full ride." },
        { title: "Camera over motion sensors for knee tracking", content: "Motion sensors drift over time. On a 90-minute ride, small errors compound into readings that no longer reflect what the rider is actually doing. A camera-based approach maintains consistent accuracy throughout the ride. It requires more power, but provides more accuracy on the metric that matters most to injury prevention." },
        { title: "Putting sensitivity in the rider's hands", content: "Rather than hardcoding how often the system alerts, we let each rider choose their sensitivity level - from minimal nudges to frequent check-ins. On rough terrain, a lower sensitivity prevents false alarms. For a beginner still learning their form, a higher sensitivity provides more guidance. The right threshold isn't a technical question, it's a personal one." },
      ],
      results: [
        { value: '84.4%', label: 'Detection precision' },
        { value: '33%', label: 'Improvement in riding posture' },
        { value: '<210ms', label: 'End-to-end feedback latency' },
        { value: '6hrs', label: 'Battery life under full load' },
      ],
      learned: "Good decisions under constraints produce better outcomes than optimal solutions that don't survive contact with the real world. Designing for a moving, fatigued human on uneven terrain taught me that the most important requirement is often the one that isn't written down.",
    },
  },
  // ── Add more projects below ──────────────────────────────────────────────
  // {
  //   year: '2024',
  //   title: 'Your Next Project',
  //   description: 'Short description.',
  //   skills: ['Tool1', 'Tool2'],
  //   github: 'https://github.com/...',
  //   website: 'https://...',
  //   caseStudy: {
  //     why: '...',
  //     problem: '...',
  //     process: '...',
  //     tradeoffs: '...',
  //     learned: '...',
  //   },
  // },
]

function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
      color: 'var(--ink-light)', marginBottom: '1.25rem',
      paddingBottom: '0.75rem', borderBottom: '1px solid var(--rule)',
    }}>{children}</div>
  )
}

function Works() {
  const [openProject, setOpenProject] = useState(null)

  return (
    <>
      {openProject && (
        <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
      )}

      {/* Main projects */}
      <SectionLabel>Projects</SectionLabel>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem',
        maxWidth: 900,
        marginBottom: '2rem',
      }}>
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => p.caseStudy && setOpenProject(p)}
            style={{
              border: '1px solid var(--rule)', borderRadius: 6,
              padding: '1.25rem 1.5rem', background: 'rgba(255,255,255,0.45)',
              display: 'flex', flexDirection: 'column', gap: '0.65rem',
              transition: 'box-shadow 0.2s, transform 0.2s',
              cursor: p.caseStudy ? 'pointer' : 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--ink-lighter)', letterSpacing: '0.08em' }}>{p.year}</span>
              <div style={{ display: 'flex', gap: '0.75rem' }} onClick={e => e.stopPropagation()}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--ink-light)', transition: 'color 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-light)'}>
                    <IconGitHub />
                  </a>
                )}
                {p.website && (
                  <a href={p.website} target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--ink-light)', transition: 'color 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-light)'}>
                    <IconGlobe />
                  </a>
                )}
              </div>
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.1 }}>{p.title}</div>
            {p.context && <span style={{ fontSize: '0.75rem', color: 'var(--ink-lighter)', fontStyle: 'italic' }}>{p.context}</span>}
            <p style={{ fontSize: '0.95rem', color: 'var(--ink-light)', lineHeight: 1.65, fontWeight: 300, flex: 1, whiteSpace: 'pre-line' }}>{p.description}</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 'auto' }}>
              <div />
              {p.caseStudy && (
                <span style={{
                  fontSize: '0.8rem', color: 'var(--ink-light)', cursor: 'pointer',
                  textDecoration: 'underline', textDecorationColor: 'var(--rule)',
                  textUnderlineOffset: '3px', transition: 'color 0.15s, text-decoration-color 0.15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.textDecorationColor = 'var(--ink)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-light)'; e.currentTarget.style.textDecorationColor = 'var(--rule)' }}
                >Learn more →</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* For Fun */}
      <SectionLabel>For Fun</SectionLabel>
      <div style={{ maxWidth: 600 }}>
        {forFunProjects.length === 0 ? (
          <p style={{ fontSize: '0.9rem', color: 'var(--ink-lighter)', fontStyle: 'italic' }}>more coming soon</p>
        ) : forFunProjects.map((p, i) => (
          <div
            key={i}
            onClick={() => (p.video || p.caseStudy) && setOpenProject(p)}
            style={{ marginBottom: '1rem', cursor: (p.video || p.caseStudy) ? 'pointer' : 'default' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
              <span
                style={{
                  fontSize: '0.9rem', fontWeight: 500, color: 'var(--ink)',
                  textDecoration: 'underline', textDecorationColor: 'var(--rule)',
                  textUnderlineOffset: '3px', transition: 'text-decoration-color 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.textDecorationColor = 'var(--ink)'}
                onMouseLeave={e => e.currentTarget.style.textDecorationColor = 'var(--rule)'}
              >{p.title}</span>
              {p.date && <span style={{ fontSize: '0.75rem', color: 'var(--ink-light)', fontFamily: 'monospace', marginLeft: 'auto' }}>{p.date}</span>}
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--ink-light)', lineHeight: 1.55, fontWeight: 300, margin: 0 }}>{p.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Works
