import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
// import { HiDocumentText } from 'react-icons/hi'
import EmailAnimation from './EmailAnimation'

const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
)

function Contact() {
  const links = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/carolynyang08/', icon: <FaLinkedin /> },
    { name: 'GitHub',   url: 'https://github.com/carolynyang08',           icon: <FaGithub /> },
    { name: 'Email',    url: 'mailto:carolynyang08@gmail.com',             icon: <MdEmail /> },
    // { name: 'Resume',   url: resumeUrl,                                    icon: <HiDocumentText /> },
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', maxWidth: 800 }}>
      <div>
        <p style={{ fontSize: '1rem', color: 'var(--ink-light)', marginBottom: '2rem', fontWeight: 300, lineHeight: 1.6 }}>
          Let's connect!
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {links.map((l, i) => (
            <a
              key={i}
              href={l.url}
              target={l.name !== 'Email' ? '_blank' : undefined}
              rel={l.name !== 'Email' ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1rem 0', borderBottom: '1px solid var(--rule)',
                color: 'var(--ink)', fontFamily: 'var(--sans)',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = 0.45}
              onMouseLeave={e => e.currentTarget.style.opacity = 1}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                <span style={{ color: 'var(--ink-light)', fontSize: '1.1rem' }}>{l.icon}</span>
                <span style={{ fontSize: '1.05rem', fontWeight: 400 }}>{l.name}</span>
              </div>
              <IconArrow />
            </a>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <EmailAnimation />
      </div>
    </div>
  )
}

export default Contact
