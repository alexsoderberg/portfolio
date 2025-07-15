import type { JSX } from "react"
import { Languages } from "../../data/Languages"

interface AboutSectionProps {
  language: Languages
}

const AboutSection = ({ language }: AboutSectionProps): JSX.Element => {
  return (
    <section id="about" className="flex flex-col justify-center items-center gap-20 min-h-screen">
      <h1 className="text-5xl">About</h1>
      <div className="flex justify-center flex-wrap md:flex-nowrap gap-20 justify-around">
        <div className="flex md:flex-1 flex-col items-center">
          <h2 className="text-xl underline">{language === Languages.SWEDISH ? "Om" : "About"}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam ultricies sollicitudin. Praesent sem urna, tincidunt eu quam in, ullamcorper placerat diam. Morbi a felis nisl. Suspendisse potenti. Maecenas dapibus consectetur urna.
            <br /><br />
            Vivamus dictum viverra dignissim. Praesent vehicula tempor neque, in ultrices lectus finibus non. Quisque sit amet ullamcorper risus. Donec volutpat pretium auctor. Aenean ac tellus ipsum. Vestibulum in sodales ex. Etiam erat nulla, tempor id dapibus vitae, varius in nisi. Morbi non nibh rutrum, placerat erat vel, ornare nunc.
          </p>
        </div>

        <div className="flex md:flex-1 flex-col items-center">
          <h2 className="text-xl underline">{language === Languages.SWEDISH ? "Nuvarande" : "Current"}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam ultricies sollicitudin. Praesent sem urna, tincidunt eu quam in, ullamcorper placerat diam. Morbi a felis nisl. Suspendisse potenti. Maecenas dapibus consectetur urna. Vivamus dictum viverra dignissim. Praesent vehicula tempor neque, in ultrices lectus finibus non. Quisque sit amet ullamcorper risus. Donec volutpat pretium auctor. Aenean ac tellus ipsum. Vestibulum in sodales ex. Etiam erat nulla, tempor id dapibus vitae, varius in nisi. Morbi non nibh rutrum, placerat erat vel, ornare nunc.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam ultricies sollicitudin. Praesent sem urna, tincidunt eu quam in, ullamcorper placerat diam. Morbi a felis nisl. Suspendisse potenti. Maecenas dapibus consectetur urna. Vivamus dictum viverra dignissim. Praesent vehicula tempor neque, in ultrices lectus finibus non. Quisque sit amet ullamcorper risus. Donec volutpat pretium auctor. Aenean ac tellus ipsum. Vestibulum in sodales ex. Etiam erat nulla, tempor id dapibus vitae, varius in nisi. Morbi non nibh rutrum, placerat erat vel, ornare nunc.
          </p>
        </div>

        <div className="flex md:flex-1 flex-col items-center">
          <h2 className="text-xl underline">{language === Languages.SWEDISH ? "Utbildning" : "Education"}</h2>
          <div>
            <p className="font-semibold">Webbprogrammering - Linnéuniversitetet</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam ultricies sollicitudin. Praesent sem urna, tincidunt eu quam in, ullamcorper placerat diam. Morbi a felis nisl. Suspendisse potenti. Maecenas dapibus consectetur urna. Vivamus dictum viverra dignissim. Praesent vehicula tempor neque, in ultrices lectus finibus non. Quisque sit amet ullamcorper risus. Donec volutpat pretium auctor. Aenean ac tellus ipsum. Vestibulum in sodales ex. Etiam erat nulla, tempor id dapibus vitae, varius in nisi. Morbi non nibh rutrum, placerat erat vel, ornare nunc.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam ultricies sollicitudin. Praesent sem urna, tincidunt eu quam in, ullamcorper placerat diam. Morbi a felis nisl. Suspendisse potenti. Maecenas dapibus consectetur urna. Vivamus dictum viverra dignissim. Praesent vehicula tempor neque, in ultrices lectus finibus non. Quisque sit amet ullamcorper risus. Donec volutpat pretium auctor. Aenean ac tellus ipsum. Vestibulum in sodales ex. Etiam erat nulla, tempor id dapibus vitae, varius in nisi. Morbi non nibh rutrum, placerat erat vel, ornare nunc.
            </p>
          </div>
        </div>


      </div>




    </section>
  )
}

export default AboutSection