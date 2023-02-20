import React, { useState } from 'react';
import css from './LangSwitcher.module.css';
import uaFlag from '..//../images/uk.png';
import enFlag from '..//../images/en.png';
import ruFlag from '..//../images/ru.png';
import i18n from 'utils/i18n';
import { useTranslation } from 'react-i18next';

const languageOptions = [
  { value: 'uk', label: 'Ukrainian', flag: uaFlag },
  { value: 'en', label: 'English', flag: enFlag },
  { value: 'ru', label: 'Russian', flag: ruFlag },
];

export const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  // const { t } = useTranslation();
  const handleLanguageChange = e => {
    i18n.changeLanguage(e.target.value);
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
