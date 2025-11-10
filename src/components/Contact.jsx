import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Contact.css';

export default function Contact() {
    const contactLinks = [
        {
            name: 'Email',
            icon: <FaEnvelope />,
            url: 'mailto:areejamir890@gmail.com',
            display: 'areejamir890@gmail.com'
        },
        {
            name: 'GitHub',
            icon: <FaGithub />,
            url: 'https://github.com/areej-png',
            display: '@areej-png'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin />,
            url: 'https://www.linkedin.com/in/areej-aamir-732473385/',
            display: 'Areej Aamir'
        }
    ];

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-text">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect!
                </p>

                <div className="contact-links">
                    {contactLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            className="contact-card"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="contact-icon">{link.icon}</div>
                            <div className="contact-info">
                                <h3>{link.name}</h3>
                                <p>{link.display}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}