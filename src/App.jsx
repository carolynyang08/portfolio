import { useState } from 'react'
import './index.css'
import deskIllustration from './assets/desk-illustrate.svg'
import About from './components/About'
import Contact from './components/Contact'
import Works from './components/Works'

/* ─── ICONS ─────────────────────────────────────────── */
const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
)

/* ─── DESK ILLUSTRATION ──────────────────────────────── */
function DeskIllustration() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 520 }}>
      <img src={deskIllustration} alt="Person at desk" style={{ width: '100%', height: 'auto', display: 'block' }} />
      {/* Steam overlay */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        viewBox="0 0 783 554" xmlns="http://www.w3.org/2000/svg">
        <path className="steam steam-1" d="M 695 355 Q 690 345, 695 335 Q 700 325, 695 315" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
        <path className="steam steam-2" d="M 710 355 Q 705 345, 710 335 Q 715 325, 710 315" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
        <path className="steam steam-3" d="M 725 355 Q 720 345, 725 335 Q 730 325, 725 315" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
      </svg>
      {/* Code lines overlay */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        viewBox="0 0 783 554" xmlns="http://www.w3.org/2000/svg">
        <path className="code-line code-line-1"  d="M 375 140 Q 420 139, 495 140 T 550 141" fill="none" stroke="#1a1a1a" strokeWidth="6"   strokeLinecap="round" opacity="0.9" />
        <path className="code-line code-line-2"  d="M 375 155 Q 420 154, 495 155 T 615 156" fill="none" stroke="#1a1a1a" strokeWidth="5"   strokeLinecap="round" opacity="0.85" />
        <path className="code-line code-line-3"  d="M 375 170 Q 410 169, 460 170"           fill="none" stroke="#1a1a1a" strokeWidth="4.5" strokeLinecap="round" opacity="0.9" />
        <path className="code-line code-line-4"  d="M 375 185 Q 420 184, 495 185 T 615 186" fill="none" stroke="#1a1a1a" strokeWidth="6.5" strokeLinecap="round" opacity="0.9" />
        <path className="code-line code-line-5"  d="M 375 200 Q 415 199, 480 200 T 520 201" fill="none" stroke="#1a1a1a" strokeWidth="5.5" strokeLinecap="round" opacity="0.85" />
        <path className="code-line code-line-6"  d="M 375 215 Q 425 214, 500 215 T 600 216" fill="none" stroke="#1a1a1a" strokeWidth="5"   strokeLinecap="round" opacity="0.88" />
        <path className="code-line code-line-7"  d="M 375 230 Q 405 229, 440 230"           fill="none" stroke="#1a1a1a" strokeWidth="4.5" strokeLinecap="round" opacity="0.9" />
        <path className="code-line code-line-8"  d="M 375 245 Q 420 244, 490 245 T 570 246" fill="none" stroke="#1a1a1a" strokeWidth="6"   strokeLinecap="round" opacity="0.87" />
        <path className="code-line code-line-9"  d="M 375 260 Q 415 259, 480 260 T 540 261" fill="none" stroke="#1a1a1a" strokeWidth="5.5" strokeLinecap="round" opacity="0.88" />
        <path className="code-line code-line-10" d="M 375 275 Q 425 274, 500 275 T 605 276" fill="none" stroke="#1a1a1a" strokeWidth="6"   strokeLinecap="round" opacity="0.87" />
      </svg>
    </div>
  )
}

/* ─── NAV ────────────────────────────────────────────── */
function Nav({ onNav, active }) {
  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.6rem 3rem',
      borderBottom: '1px solid var(--rule)',
      position: 'sticky', top: 0,
      background: 'var(--bg)',
      zIndex: 100,
      fontFamily: 'var(--sans)',
    }}>
      <div
        onClick={() => onNav(null)}
        style={{
          fontSize: '0.88rem', fontWeight: 500, letterSpacing: '0.04em',
          cursor: 'pointer', textTransform: 'uppercase',
          opacity: active === null ? 1 : 0.5,
          transition: 'opacity 0.2s',
        }}
      >Carolyn Yang</div>

      <div style={{ display: 'flex', gap: '2.5rem' }}>
        {['about', 'works', 'contact'].map(sec => (
          <div
            key={sec}
            onClick={() => onNav(sec)}
            style={{
              fontSize: '0.82rem', fontWeight: 400, letterSpacing: '0.06em',
              textTransform: 'uppercase', cursor: 'pointer', padding: '0.3rem 0',
              borderBottom: 'none',
              transition: 'opacity 0.2s',
              opacity: active && active !== sec ? 0.4 : 1,
            }}
          >
            {sec === 'works' ? 'Projects' : sec.charAt(0).toUpperCase() + sec.slice(1)}
          </div>
        ))}
      </div>
    </nav>
  )
}

/* ─── HOME ───────────────────────────────────────────── */
function Home() {
  return (
    <div style={{
      height: 'calc(100vh - 66px - 48px)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden',
    }}>
      {/* Left: text */}
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '2.5rem 3rem',
        borderRight: '1px solid var(--rule)',
      }}>
        <p className="fade-up delay-1" style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-0.01em',
          color: 'var(--ink)',
          margin: '0 0 1.25rem 0',
        }}>
          Hi, I'm Carolyn Yang!
        </p>

        <p className="fade-up delay-2" style={{
          fontFamily: 'var(--sans)',
          fontSize: '1rem',
          lineHeight: 1.75,
          color: 'var(--ink-light)',
          fontWeight: 300,
          maxWidth: 540,
          margin: 0,
          textWrap: 'balance',
        }}>
          I'm an engineer who found a passion for strategy and process. I love learning how businesses work, and I'm always looking for ways to untangle complex problems. I'm driven by curiosity, a love for learning, and a focus on driving real impact.
        </p>
      </div>

      {/* Right: illustration */}
      <div className="fade-up delay-3" style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        padding: '2rem 2rem 2rem',
        overflow: 'hidden',
        height: '100%',
      }}>
        <DeskIllustration />
      </div>
    </div>
  )
}

/* ─── SECTION HEADER ─────────────────────────────────── */
function SectionHeader({ title }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h1 style={{
        fontFamily: 'var(--serif)',
        fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
        fontWeight: 400,
        letterSpacing: '-0.01em',
        lineHeight: 1.1,
        color: 'var(--ink)',
      }}>{title}</h1>
    </div>
  )
}

/* ─── SECTION VIEW ───────────────────────────────────── */
const sectionMeta = {
  about:   { title: 'About' },
  works:   { title: 'Projects' },
  contact: { title: 'Contact' },
}

function SectionView({ section }) {
  const meta = sectionMeta[section]
  return (
    <div className="fade-up" style={{ padding: '4rem 3rem', maxWidth: 1100, margin: '0 auto' }}>
      <SectionHeader title={meta.title} />
      {section === 'about'   && <About />}
      {section === 'works'   && <Works />}
      {section === 'contact' && <Contact />}
    </div>
  )
}

/* ─── FOOTER ─────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{
      padding: '1rem 3rem',
      borderTop: '1px solid var(--rule)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      fontSize: '0.78rem', color: 'var(--ink-lighter)', fontFamily: 'var(--sans)',
    }}>
      <span>©{new Date().getFullYear()}</span>
    </footer>
  )
}

/* ─── APP ────────────────────────────────────────────── */
function App() {
  const [active, setActive] = useState(null)

  return (
    <div style={{
      fontFamily: 'var(--sans)',
      background: 'var(--bg)',
      color: 'var(--ink)',
      height: '100vh',
      overflow: active === null ? 'hidden' : 'auto',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Nav onNav={setActive} active={active} />
      <div style={{ flex: 1, overflow: active === null ? 'hidden' : 'auto', minHeight: 0 }}>
        {active === null ? <Home /> : <SectionView key={active} section={active} />}
      </div>
      <Footer />
    </div>
  )
}

export default App
