import type { JSX } from "react"

const AboutSection = (): JSX.Element => {
  return (
    <section id="about" className="flex h-screen p-20 gap-20 justify-around">
      <div>
        <h2 className="text-xl">About</h2>
        <p>
          Jag heter Alex Söderberg och är en utvecklare med fokus på backend och ett intresse för fullstackutveckling. Jag gillar att arbeta med tydlig struktur, rena API:er och lösningar som är lätta att underhålla och vidareutveckla.
          <br /><br />
          Jag trivs bäst när jag får lösa konkreta problem och bygga funktionalitet som faktiskt används. Att skriva tydlig, läsbar kod och ha koll på hela kedjan från databas till gränssnitt är något jag strävar efter.
        </p>
      </div>

      <div>
        <h2 className="text-xl">Current</h2>
        <p>
          Just nu fokuserar jag på att fördjupa mina kunskaper inom Go och distribuerade system. Jag bygger egna projekt för att utforska mikrotjänster, REST-API:er och autentisering med JWT samt Dockerbaserad utveckling.
          <br /><br />
          Parallellt vidareutvecklar jag en digital version av ett brädspel med React och Spring Boot, och experimenterar med CI/CD-lösningar för att förbättra deployments och testflöden. Målet är att kombinera stabil backendlogik med en smidig frontendupplevelse.
        </p>
      </div>

      <div>
        <h2 className="text-xl">Skills</h2>
        <p>
          Jag arbetar dagligen med:
          <ul className="list-disc list-inside mt-2">
            <li><strong>Backend:</strong> Java (Spring Boot), Go</li>
            <li><strong>Frontend:</strong> React, TypeScript, Tailwind CSS</li>
            <li><strong>DevOps:</strong> Docker, GitHub Actions, CI/CD</li>
            <li><strong>Databaser:</strong> PostgreSQL, MongoDB</li>
            <li><strong>Testning:</strong> JUnit, Jest, Mocking</li>
            <li><strong>Annat:</strong> REST API-design, autentisering (JWT/Auth0), domänmodellering</li>
          </ul>
          <br />
          Jag har även erfarenhet av att sätta upp mindre fullstackprojekt från grunden och anpassa arkitekturen efter behoven i projektet.
        </p>
      </div>

    </section>
  )
}

export default AboutSection