import { createContext } from 'react';
import { Languages } from '../data/Languages';

export interface LanguageContextType {
  language: Languages;
  setLanguage: (lang: Languages) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
