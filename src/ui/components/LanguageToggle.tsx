import { Languages } from "../../data/Languages"
import useLanguage from "../../hooks/useLanguage"

const LanguageToggle = () => {
  const { setLanguage } = useLanguage();

  return (
    <div className="flex justify-center w-7 md:w-10 gap-3">
      <img src="src\assets\sweden-flag-icon.svg" alt="Swedish flag" onClick={() => setLanguage(Languages.SWEDISH)} tabIndex={0} className="cursor-pointer" />
      <img src="src\assets\united-kingdom-flag-icon.svg" alt="UK flag" onClick={() => setLanguage(Languages.ENGLISH)} tabIndex={0} className="cursor-pointer"/>
    </div>
  )
}

export default LanguageToggle