import { Link, Route, Routes } from 'react-router-dom';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { Bernardazzi } from 'pages/BernardazziPage/BernardazziPage';
import { Torricelli } from 'pages/TorricelliPage/TorricelliPage';
import { Home } from 'pages/HomePage/HomePage';
import { Slider } from 'pages/SliderPage/SliderPage';
// import { LanguageSwitcher } from './LangSwitcher/LangSwitcher';

import Logo from 'images/swiss.svg';

import css from './App.module.css';

export const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <nav className={css.nav}>
          <Link to="/" end>
            <img className={css.navLogo} src={Logo} alt="Logo" />
          </Link>
          <Link className={(css.navlink, css.linkHover)} to="/Bernardazzi">
            {t('Bernardazzi')}
          </Link>
          <Link className={css.navlink} to="/Torricelli">
            {t('Torricelli')}
          </Link>
          <div className={css.buttonLangBox}>
            <button
              className={css.buttonLang}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <button
              className={css.buttonLang}
              onClick={() => changeLanguage('ua')}
            >
              UA
            </button>
            <button
              className={css.buttonLang}
              onClick={() => changeLanguage('ru')}
            >
              RU
            </button>
          </div>
        </nav>
      </header>
      <main className={css.content}>
        <Routes>
          <Route path="*" element={<Home language={i18n.language} />} />
          <Route
            path="/Bernardazzi"
            element={<Bernardazzi language={i18n.language} />}
          />
          <Route
            path="/Bernardazzi/:projectName"
            element={<Slider language={i18n.language} />}
          />
          <Route
            path="/Torricelli"
            element={<Torricelli language={i18n.language} />}
          />
          <Route
            path="/Torricelli/:projectName"
            element={<Slider language={i18n.language} />}
          />
        </Routes>
      </main>
      <footer className={css.footer}>
        <div className={css.footerText}>
          {t('Made')}
          <a
            className={css.linkProduser}
            href="https://starter.ooo/"
            target="_blanc"
            rel="noopener"
          >
            Starter
          </a>
        </div>
      </footer>
    </div>
  );
};
