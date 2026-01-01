import { useState, useEffect } from 'react'
import './App.css'
import deskIllustration from './assets/desk-illustrate.svg'
import About from './components/About'
import Contact from './components/Contact'
import EmailAnimation from './components/EmailAnimation'
import Works from './components/Works'

function App() {
  const fullText = "developer passionate about turning data into insights and intuitive experiences."
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-left" onClick={() => setActiveSection(null)}>Carolyn Yang</div>
        <div className="nav-right">
          <div className="nav-item" onClick={() => setActiveSection('about')}>
            <span className="binary">00</span> About
          </div>
          <div className="nav-item" onClick={() => setActiveSection('works')}>
            <span className="binary">01</span> Works
          </div>
          <div className="nav-item" onClick={() => setActiveSection('contact')}>
            <span className="binary">10</span> Contact
          </div>
        </div>
      </nav>

      {activeSection === null ? (
        <>
          {/* Hero Section */}
          <section className="hero">
            <h1 className="hero-title">
              <span className="name">Carolyn Yang</span>
            </h1>
            <p className="tagline">
              {displayText}
              <span className="cursor">|</span>
            </p>
          </section>

          {/* Illustration */}
          <section className="illustration-container">
            <div className="illustration-wrapper">
              <img src={deskIllustration} alt="Developer at desk" className="desk-illustration" />

              {/* Coffee Steam Animation Overlay */}
              <svg className="steam-overlay" viewBox="0 0 783 554" xmlns="http://www.w3.org/2000/svg">
                <path className="steam steam-1" d="M 695 355 Q 690 345, 695 335 Q 700 325, 695 315" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round"/>
                <path className="steam steam-2" d="M 710 355 Q 705 345, 710 335 Q 715 325, 710 315" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round"/>
                <path className="steam steam-3" d="M 725 355 Q 720 345, 725 335 Q 730 325, 725 315" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round"/>
              </svg>

              {/* Code Lines Animation Overlay */}
              <svg className="code-overlay" viewBox="0 0 783 554" xmlns="http://www.w3.org/2000/svg">
                <path className="code-line code-line-1" d="M 375 140 Q 420 139, 495 140 T 550 141" fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" opacity="0.9"/>
                <path className="code-line code-line-2" d="M 375 155 Q 420 154, 495 155 T 615 156" fill="none" stroke="#000000" strokeWidth="5" strokeLinecap="round" opacity="0.85"/>
                <path className="code-line code-line-3" d="M 375 170 Q 410 169, 460 170" fill="none" stroke="#000000" strokeWidth="4.5" strokeLinecap="round" opacity="0.9"/>
                <path className="code-line code-line-4" d="M 375 185 Q 420 184, 495 185 T 615 186" fill="none" stroke="#000000" strokeWidth="6.5" strokeLinecap="round" opacity="0.9"/>
                <path className="code-line code-line-5" d="M 375 200 Q 415 199, 480 200 T 520 201" fill="none" stroke="#000000" strokeWidth="5.5" strokeLinecap="round" opacity="0.85"/>
                <path className="code-line code-line-6" d="M 375 215 Q 425 214, 500 215 T 600 216" fill="none" stroke="#000000" strokeWidth="5" strokeLinecap="round" opacity="0.88"/>
                <path className="code-line code-line-7" d="M 375 230 Q 405 229, 440 230" fill="none" stroke="#000000" strokeWidth="4.5" strokeLinecap="round" opacity="0.9"/>
                <path className="code-line code-line-8" d="M 375 245 Q 420 244, 490 245 T 570 246" fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" opacity="0.87"/>
                <path className="code-line code-line-9" d="M 375 260 Q 415 259, 480 260 T 540 261" fill="none" stroke="#000000" strokeWidth="5.5" strokeLinecap="round" opacity="0.88"/>
                <path className="code-line code-line-10" d="M 375 275 Q 425 274, 500 275 T 605 276" fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" opacity="0.87"/>
              </svg>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer">
            <p className="year">©2025</p>
          </footer>
        </>
      ) : (
        <>
          {/* Section View */}
          <section className="section-view">
            <div className="section-view-header">
              <span className="binary">
                {activeSection === 'about' ? '00' : activeSection === 'works' ? '01' : '10'}
              </span>
              <h1>{activeSection === 'about' ? 'About' : activeSection === 'works' ? 'Works' : 'Contact'}</h1>
            </div>
            <div className="section-view-content">
              {activeSection === 'about' && <About />}
              {activeSection === 'works' && <Works />}
              {activeSection === 'contact' && (
                <div className="contact-layout">
                  <div className="contact-left">
                    <Contact />
                  </div>
                  <div className="contact-right">
                    <EmailAnimation />
                  </div>
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  )
}

export default App
