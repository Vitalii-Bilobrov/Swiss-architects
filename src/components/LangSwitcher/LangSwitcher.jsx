import React, { useState } from 'react';
import css from './LangSwitcher.module.css';

const languageOptions = [
  { value: 'uk', label: 'Ukrainian' },
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Russian' },
];

export const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = e => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div>
      <select
        className={css.languageWindow}
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        {languageOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
