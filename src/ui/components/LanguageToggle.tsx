import { Languages } from "../../data/Languages"

interface LanguageToggleProps {
  setCurrentLanguage: (language: Languages) => void
}

const LanguageToggle = ({ setCurrentLanguage }: LanguageToggleProps) => {

  return (
    <div className="flex min-w-10 gap-2">
      <img src="src\assets\sweden-flag-icon.svg" alt="Swedish flag" onClick={() => setCurrentLanguage(Languages.SWEDISH)} />
      <img src="src\assets\united-kingdom-flag-icon.svg" alt="UK flag" onClick={() => setCurrentLanguage(Languages.ENGLISH)} />
    </div>
  )
}

export default LanguageToggle