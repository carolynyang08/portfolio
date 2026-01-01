import { useState, useEffect } from 'react'
import computerEmail from '../assets/computer-email-transparent.png'
import computerEmailSent from '../assets/computer-email-send-transparent.png'

function EmailAnimation() {
  const [isSent, setIsSent] = useState(false)
  const [animationState, setAnimationState] = useState('idle') // idle, moving, clicking, sent

  useEffect(() => {
    // Start animation sequence
    const sequence = async () => {
      // Wait 2 seconds before starting
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Move cursor to send button
      setAnimationState('moving')
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Click animation
      setAnimationState('clicking')
      await new Promise(resolve => setTimeout(resolve, 200))

      // Show sent image
      setIsSent(true)
      setAnimationState('sent')

      // Reset after 3 seconds
      await new Promise(resolve => setTimeout(resolve, 3000))
      setIsSent(false)
      setAnimationState('idle')
    }

    const interval = setInterval(() => {
      sequence()
    }, 10000) // Repeat every 10 seconds

    sequence() // Run once on mount

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="email-animation-container">
      <div className="email-animation-wrapper">
        <img
          src={isSent ? computerEmailSent : computerEmail}
          alt="Computer with email"
          className="email-illustration"
        />

        {/* Animated cursor */}
        <div
          className={`animated-cursor ${animationState}`}
          style={{
            left: animationState === 'idle' ? '80%' : '36%',
            top: animationState === 'idle' ? '70%' : '50%'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#1a1a1a"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default EmailAnimation
