import React, { useState } from 'react';
import css from './LangSwitcher.module.css';
import uaFlag from '..//../images/uk.png';
import enFlag from '..//../images/en.png';
import ruFlag from '..//../images/ru.png';

const languageOptions = [
  { value: 'uk', label: 'Ukrainian', flag: uaFlag },
  { value: 'en', label: 'English', flag: enFlag },
  { value: 'ru', label: 'Russian', flag: ruFlag },
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
        {languageOptions.map(option => {
          return (
            <option
              className={css.optionList}
              key={option.value}
              value={option.value}
            >
              <div>{option.label}</div>
            </option>
          );
        })}
      </select>
    </div>
  );
};
