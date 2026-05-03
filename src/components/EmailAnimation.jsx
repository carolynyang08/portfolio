import { useState, useEffect } from 'react'
import computerEmail from '../assets/computer-email-transparent.png'
import computerEmailSent from '../assets/computer-email-send-transparent.png'

function EmailAnimation() {
  const [isSent, setIsSent] = useState(false)
  const [animState, setAnimState] = useState('idle')

  useEffect(() => {
    const sequence = async () => {
      await new Promise(r => setTimeout(r, 2000))
      setAnimState('moving')
      await new Promise(r => setTimeout(r, 1500))
      setAnimState('clicking')
      await new Promise(r => setTimeout(r, 200))
      setIsSent(true)
      setAnimState('sent')
      await new Promise(r => setTimeout(r, 3000))
      setIsSent(false)
      setAnimState('idle')
    }

    sequence()
    const id = setInterval(sequence, 10000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 360 }}>
      <img
        src={isSent ? computerEmailSent : computerEmail}
        alt="Computer with email"
        style={{ width: '100%', height: 'auto', display: 'block', transition: 'opacity 0.3s' }}
      />
      <div
        className={`animated-cursor${animState === 'clicking' ? ' clicking' : ''}`}
        style={{
          left: animState === 'idle' ? '80%' : '36%',
          top:  animState === 'idle' ? '70%' : '50%',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#1a1a1a" />
        </svg>
      </div>
    </div>
  )
}

export default EmailAnimation
