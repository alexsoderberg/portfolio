import { useState } from 'react';
import { LanguageContext } from './LanguageContext';
import { Languages } from '../data/Languages';

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState(Languages.SWEDISH);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
