import type { JSX } from "react"
import Portrait from "../components/Portrait"
import Contact from "../sections/ContactSection"
import AboutSection from "../sections/AboutSection"

/**
 * The starting page for the application.
 *
 * @returns {JSX.Element} - Starting page for the application. 
 */
const HomePage = (): JSX.Element => {
  return (
    <>
      <main className="flex flex-col">
        <section className="flex h-screen justify-between items-center mx-50 p-20">
          <p>Fullstack-utvecklare med fokus på backend. Jag försöker ständigt förbättra kunskaper inom DevOps, Frontend och Backend.</p>
          <Portrait />
        </section>

        <AboutSection />

        <section className="flex flex-col items-center h-screen p-20">
          <span className="border-l p-20">
            <h2 className="text-xl mb-6">Education</h2>
            <div>
              <p className="font-semibold">Högskoleexamen i Webbprogrammering - Linnéuniversitetet</p>
              <p className="mt-2 max-w-xl">
                Under utbildningen fördjupade jag mig i både backend och frontend, med fokus på modern webbutveckling. Jag arbetade med flera projekt som bland annat innefattade API-design, databaser, säkerhet och responsiva gränssnitt.
              </p>
              <p className="mt-4 max-w-xl">
                Genom kursprojekt har jag byggt allt från enklare fullstackappar till mer avancerade system med autentisering, rollhantering och integration mot externa API:er.
              </p>
            </div>
          </span>
        </section>


        <Contact />
      </main>
    </>
  )
}

export default HomePage