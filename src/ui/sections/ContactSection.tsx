import { Link } from "react-router-dom"

const ContactSection = () => {
  return (
    <section id="contact" className="flex flex-col items-center gap-10 justify-center p-20">
      <h2 className="text-2xl">Contact</h2>
      <p>If you are interested in making a job offer or other stuff, do not hesitate to contact me by email or a message on LinkedIn</p>
      <nav>
        <ul className="flex items-center gap-15">
          <li className="w-15">
            <Link to="https://linkedin.com/in/alex-söderberg-44062b184" target="_blank"><img src="src\assets\linkedin-svgrepo-com.svg" alt="LinkedIn logo" /></Link>
          </li>
          <li className="w-15">
            <Link to="https://github.com/alexsoderberg" target="_blank"><img src="src\assets\github-mark-white.svg" alt="GitHub logo" /></Link>
          </li>
          <li className="w-15">
            <Link to="#" onClick={() => window.location.href = "mailto:soderberg.alex@outlook.com"}><img src="src\assets\email-svgrepo-com.svg" alt="Mail logo" /></Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default ContactSection