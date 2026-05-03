import { useEffect } from 'react'
import { createPortal } from 'react-dom'

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
 * ProjectModal — generic, reusable for any project.
 * Renders via a React Portal so it always covers the full viewport.
 *
 * Props:
 *   project  — one entry from the projects array in Works.jsx
 *   onClose  — callback to close the modal
 */
function ProjectModal({ project, onClose }) {
  const cs = project.caseStudy || {}
  const sections = [
    cs.why       && { label: 'Why I Built It',  content: cs.why },
    cs.problem   && { label: 'The Problem',     content: cs.problem },
    cs.process   && { label: 'What We Built',   content: cs.process },
    cs.tradeoffs && { label: 'Trade-offs',      content: cs.tradeoffs },
  ].filter(Boolean)

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handler)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handler)
    }
  }, [onClose])

  const linkStyle = {
    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
    fontSize: '0.8rem', color: 'var(--ink-light)',
    border: '1px solid var(--rule)', borderRadius: 3,
    padding: '0.4rem 0.8rem',
    transition: 'color 0.15s, border-color 0.15s',
  }

  const modal = (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(26,26,26,0.4)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: '3vh 2rem',
      }}
    >
      <div style={{
        background: 'var(--bg)',
        border: '1px solid var(--rule)',
        borderRadius: 8,
        width: '100%', maxWidth: 1100,
        maxHeight: '94vh',
        overflowY: 'auto',
        animation: 'modalIn 0.3s cubic-bezier(0.22,1,0.36,1) both',
        position: 'relative',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          padding: '2rem 2rem 1.5rem',
          borderBottom: '1px solid var(--rule)',
          position: 'sticky', top: 0, background: 'var(--bg)', zIndex: 1,
        }}>
          <div style={{ maxWidth: 680 }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-light)', marginBottom: '0.5rem' }}>{project.year}</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: project.subtitle ? '2.2rem' : '2rem', fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.15, marginBottom: project.subtitle ? '0.5rem' : 0 }}>{project.title}</div>
            {project.subtitle && (
              <div style={{ fontSize: '1rem', color: 'var(--ink-light)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.55 }}>{project.subtitle}</div>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={linkStyle}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--ink)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-light)'; e.currentTarget.style.borderColor = 'var(--rule)' }}>
                <IconGitHub /> GitHub
              </a>
            )}
            {project.website && (
              <a href={project.website} target="_blank" rel="noopener noreferrer" style={linkStyle}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--ink)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-light)'; e.currentTarget.style.borderColor = 'var(--rule)' }}>
                <IconGlobe /> Website
              </a>
            )}
            <button
              onClick={onClose}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--ink-light)', padding: '0.25rem',
                fontSize: '1.5rem', lineHeight: 1, marginTop: '0.25rem',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-light)'}
            >&times;</button>
          </div>
        </div>

        {/* Body: two-col if video, single-col otherwise */}
        {project.body ? (
          <>
            {true && (
              <div style={{ padding: '1.5rem 2rem 1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                {/* Left: video + image stacked */}
                <div style={{ flexShrink: 0, width: '48%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <video
                    src={project.video}
                    autoPlay muted loop playsInline controls
                    style={{ width: '100%', borderRadius: 4, border: '1px solid var(--rule)', display: 'block' }}
                  />
                  {(project.image || project.image2) && (
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {project.image && (
                        <img src={project.image} alt="" style={{ flex: 1, minWidth: 0, height: 'auto', borderRadius: 4, border: '1px solid var(--rule)', display: 'block' }} />
                      )}
                      {project.image2 && (
                        <img src={project.image2} alt="" style={{ flex: 1, minWidth: 0, height: 'auto', borderRadius: 4, border: '1px solid var(--rule)', display: 'block' }} />
                      )}
                    </div>
                  )}
                </div>

                {/* Right: all text + button at bottom */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100%' }}>
                  <div>
                    {project.body.map((para, i) => (
                      <p key={i} style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--ink)', fontWeight: 300, margin: 0, marginBottom: '0.9rem' }}>{para}</p>
                    ))}
                  </div>
                  {project.article && (
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                      <a href={project.article} target="_blank" rel="noopener noreferrer"
                        style={{
                          fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.04em',
                          color: 'var(--bg)', background: 'var(--ink)',
                          padding: '0.6rem 1.2rem', borderRadius: 6, textDecoration: 'none',
                          transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = 0.75}
                        onMouseLeave={e => e.currentTarget.style.opacity = 1}
                      >Read more on Medium →</a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div style={{ display: 'flex', gap: '2rem', padding: '1.5rem 2rem 2.5rem', alignItems: 'flex-start' }}>
              {/* Left: video + image stacked */}
              {(project.video || project.image) && (
                <div style={{ flexShrink: 0, width: '42%', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {project.video && (
                    <video
                      src={project.video}
                      autoPlay muted loop playsInline controls
                      style={{ width: '100%', borderRadius: 4, border: '1px solid var(--rule)', display: 'block' }}
                    />
                  )}
                  {project.image && (
                    <img
                      src={project.image}
                      alt=""
                      style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid var(--rule)', display: 'block' }}
                    />
                  )}
                  {project.image2 && (
                    <img
                      src={project.image2}
                      alt=""
                      style={{ width: '100%', height: 'auto', borderRadius: 4, border: '1px solid var(--rule)', display: 'block' }}
                    />
                  )}
                </div>
              )}

              {/* Right: case study sections */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {sections.map((s, i) => (
                <div key={i}>
                  <div style={{
                    fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'var(--ink-light)', marginBottom: '0.6rem',
                    paddingBottom: '0.5rem', borderBottom: '1px solid var(--rule)',
                  }}>{s.label}</div>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink)', fontWeight: 300, margin: 0, whiteSpace: 'pre-line' }}>{s.content}</p>
                </div>
              ))}

              {cs.decisions && cs.decisions.length > 0 && (
                <div>
                  <div style={{
                    fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'var(--ink-light)', marginBottom: '1rem',
                    paddingBottom: '0.5rem', borderBottom: '1px solid var(--rule)',
                  }}>Key Decisions</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {cs.decisions.map((d, i) => (
                      <div key={i}>
                        <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--ink)', marginBottom: '0.3rem' }}>{d.title}</div>
                        <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink)', fontWeight: 300, margin: 0 }}>{d.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
            </div>

            {/* Full-width sections: Results + What I Took Away + skills */}
            {(cs.results || cs.learned) && (
              <div style={{ padding: '0 2rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {cs.results && cs.results.length > 0 && (
                  <div>
                    <div style={{
                      fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                      color: 'var(--ink-light)', marginBottom: '1rem',
                      paddingBottom: '0.5rem', borderBottom: '1px solid var(--rule)',
                    }}>Results</div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                      {cs.results.map((r, i) => (
                        <div key={i} style={{ padding: '1rem', border: '1px solid var(--rule)', borderRadius: 6, textAlign: 'center' }}>
                          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.75rem', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '0.4rem' }}>{r.value}</div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--ink-light)', lineHeight: 1.4 }}>{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {cs.learned && (
                  <div>
                    <div style={{
                      fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                      color: 'var(--ink-light)', marginBottom: '0.6rem',
                      paddingBottom: '0.5rem', borderBottom: '1px solid var(--rule)',
                    }}>What I Took Away</div>
                    <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink)', fontWeight: 300, margin: 0 }}>{cs.learned}</p>
                  </div>
                )}

                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {project.skills.map((sk, j) => (
                    <span key={j} style={{
                      padding: '0.2rem 0.6rem', border: '1px solid var(--rule)',
                      borderRadius: 3, fontSize: '0.72rem', color: 'var(--ink-light)', letterSpacing: '0.04em',
                    }}>{sk}</span>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}

export default ProjectModal
