import React, { useState } from 'react';

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'Français' },
  { value: 'es', label: 'Español' },
];

export const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = e => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        {languageOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
