import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage måste användas inom en <LanguageProvider>');
  }
  return context;
};

export default useLanguage