import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { HiDocumentText } from 'react-icons/hi'

function Contact() {
  const contactLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/carolynyang08/",
      icon: <FaLinkedin />
    },
    {
      name: "GitHub",
      url: "https://github.com/carolynyang08",
      icon: <FaGithub />
    },
    {
      name: "Email",
      url: "mailto:carolynyang08@gmail.com",
      icon: <MdEmail />
    },
    {
      name: "Resume",
      url: "/resume.pdf",
      icon: <HiDocumentText />
    }
  ]

  return (
    <div className="contact-links">
      <p className="contact-intro">Let's Connect!</p>
      {contactLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target={link.name !== "Email" ? "_blank" : undefined}
          rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
          className="contact-link"
        >
          <span className="contact-icon">{link.icon}</span>
          <span className="contact-name">{link.name}</span>
        </a>
      ))}
    </div>
  )
}

export default Contact
