import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage} className='cursor-pointer p-1 hover:border-b-2'>
      {language === 'es' ? 'EN' : 'ES'}
    </button>
  );
};

export default LanguageSelector;