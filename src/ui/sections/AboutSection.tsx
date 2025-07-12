import type { JSX } from "react"

const AboutSection = (): JSX.Element => {
  return (
    <section id="about" className="flex flex-col justify-center items-center gap-20 min-h-screen">
      <h1 className="text-5xl">About</h1>
      <div className="flex justify-center flex-wrap md:flex-nowrap gap-20 justify-around">
        <div className="flex flex-col items-center">
          <h2 className="text-xl underline">About</h2>
          <p>
            Jag heter Alex Söderberg och är en utvecklare med fokus på backend och ett intresse för fullstackutveckling. Jag gillar att arbeta med tydlig struktur, rena API:er och lösningar som är lätta att underhålla och vidareutveckla.
            <br /><br />
            Jag trivs bäst när jag får lösa konkreta problem och bygga funktionalitet som faktiskt används. Att skriva tydlig, läsbar kod och ha koll på hela kedjan från databas till gränssnitt är något jag strävar efter.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-xl underline">Current</h2>
          <p>
            Just nu fokuserar jag på att fördjupa mina kunskaper inom Go och distribuerade system. Jag bygger egna projekt för att utforska mikrotjänster, REST-API:er och autentisering med JWT samt Dockerbaserad utveckling.
            <br /><br />
            Parallellt vidareutvecklar jag en digital version av ett brädspel med React och Spring Boot, och experimenterar med CI/CD-lösningar för att förbättra deployments och testflöden. Målet är att kombinera stabil backendlogik med en smidig frontendupplevelse.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-xl underline">Utbildning</h2>
          <div>
            <p className="font-semibold">Högskoleexamen i Webbprogrammering - Linnéuniversitetet</p>
            <p>
              Under utbildningen fördjupade jag mig i både backend och frontend, med fokus på modern webbutveckling. Jag arbetade med flera projekt som bland annat innefattade API-design, databaser, säkerhet och responsiva gränssnitt.
            </p>
            <p>
              Genom kursprojekt har jag byggt allt från enklare fullstackappar till mer avancerade system med autentisering, rollhantering och integration mot externa API:er.
            </p>
          </div>
        </div>


      </div>




    </section>
  )
}

export default AboutSection