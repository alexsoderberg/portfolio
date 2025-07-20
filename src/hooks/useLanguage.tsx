import { useState } from 'react'
import { Languages } from '../data/Languages'

const useLanguage = (initialLanguage: Languages) => {
  const [language, setLanguage] = useState<Languages>(initialLanguage);

  return {language, setLanguage }
}

export default useLanguage;