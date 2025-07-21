import { Link } from "react-router-dom"
import useLanguage from "../../hooks/useLanguage"
import { Languages } from "../../data/Languages"

const ContactSection = () => {
  const { language } = useLanguage()

  const textSwe = "Om du vill komma i kontakt med mig kan du höra av dig, via LinkedIn eller mail."
  const textEng = "If you are interested in making a job offer or other stuff, do not hesitate to contact me by email or a message on LinkedIn"

  return (
    <section id="contact" className="flex flex-col items-center gap-10 justify-center">
      <h2 className="text-2xl">{language === Languages.SWEDISH ? "Kontakt" : "Contact"}</h2>
      <p>
        {language === Languages.SWEDISH ? textSwe : textEng}
      </p>
      <nav>
        <ul className="flex items-center gap-5 md:gap-15">
          <li className="max-w-15 min-w-10">
            <Link to="https://linkedin.com/in/alex-söderberg-44062b184" target="_blank"><img src="src\assets\linkedin-svgrepo-com.svg" alt="LinkedIn logo" /></Link>
          </li>
          <li className="max-w-15 min-w-10">
            <Link to="https://github.com/alexsoderberg" target="_blank"><img src="src\assets\github-mark-white.svg" alt="GitHub logo" /></Link>
          </li>
          <li className="max-w-15 min-w-10">
            <Link to="#" onClick={() => window.location.href = "mailto:soderberg.alex@outlook.com"}><img src="src\assets\email-svgrepo-com.svg" alt="Mail logo" /></Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default ContactSection