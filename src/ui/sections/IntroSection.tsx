import { Languages } from "../../data/Languages"
import useLanguage from "../../hooks/useLanguage"
import Portrait from "../components/Portrait"

const IntroSection = () => {
  const { language } = useLanguage()

  const swedishDescription = "Fullstack-utvecklare på svenska. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam ultricies sollicitudin. Praesent sem urna, tincidunt eu quam in, ullamcorper placerat diam. Morbi a felis nisl. Suspendisse potenti. Maecenas dapibus consectetur urna. Vivamus dictum viverra dignissim. Praesent vehicula tempor neque, in ultrices lectus finibus non. Quisque sit amet ullamcorper risus. Donec volutpat pretium auctor. Aenean ac tellus ipsum. Vestibulum in sodales ex. Etiam erat nulla, tempor id dapibus vitae, varius in nisi. Morbi non nibh rutrum, placerat erat vel, ornare nunc."

  const englishDescription = "Fullstack-developer bla bla bla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam ultricies sollicitudin. Praesent sem urna, tincidunt eu quam in, ullamcorper placerat diam. Morbi a felis nisl. Suspendisse potenti. Maecenas dapibus consectetur urna. Vivamus dictum viverra dignissim. Praesent vehicula tempor neque, in ultrices lectus finibus non. Quisque sit amet ullamcorper risus. Donec volutpat pretium auctor. Aenean ac tellus ipsum. Vestibulum in sodales ex. Etiam erat nulla, tempor id dapibus vitae, varius in nisi. Morbi non nibh rutrum, placerat erat vel, ornare nunc."
  
  return (  
    <section className="flex flex-col h-screen justify-center items-center gap-40 md:flex-row">
      <p className="md:max-w-30/100">
        {language === Languages.SWEDISH ? swedishDescription : englishDescription}
      </p>
      <Portrait />
    </section>
  )
}

export default IntroSection