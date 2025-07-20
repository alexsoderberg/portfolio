import { Languages } from "../../data/Languages"
import useLanguage from "../../hooks/useLanguage"

const LanguageToggle = () => {
  const { setLanguage } = useLanguage();

  return (
    <div className="flex w-7 md:w-10 gap-3">
      <img src="src\assets\sweden-flag-icon.svg" alt="Swedish flag" onClick={() => setLanguage(Languages.SWEDISH)} />
      <img src="src\assets\united-kingdom-flag-icon.svg" alt="UK flag" onClick={() => setLanguage(Languages.ENGLISH)} />
    </div>
  )
}

export default LanguageToggle