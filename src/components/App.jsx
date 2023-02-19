import { Link, Route, Routes } from 'react-router-dom';

import React from 'react';
// import { useTranslation } from 'react-i18next';

import { Bernardazzi } from 'pages/BernardazziPage/BernardazziPage';
import { Torricelli } from 'pages/TorricelliPage/TorricelliPage';
import { Home } from 'pages/HomePage/HomePage';
import { Slider } from 'pages/SliderPage/SliderPage';
import { LanguageSwitcher } from './LangSwitcher/LangSwitcher';

import Logo from 'images/swiss.svg';

import css from './App.module.css';
// import LanguageFlags from './LanguageFlags/LanguageFlags';

export const App = () => {
  // const { t, i18n } = useTranslation();
  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <nav className={css.nav}>
          <Link to="/" end>
            <img className={css.navLogo} src={Logo} alt="Logo" />
          </Link>
          <Link className={css.navlink} to="/Bernardazzi">
            Бернардацци
          </Link>
          <Link className={css.navlink} to="/Torricelli">
            Торичелли
          </Link>
          <div>{<LanguageSwitcher />}</div>
        </nav>
      </header>
      <main className={css.content}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/Bernardazzi" element={<Bernardazzi />} />
          <Route path="/Bernardazzi/:projectName" element={<Slider />} />
          <Route path="/Torricelli" element={<Torricelli />} />
          <Route path="/Torricelli/:projectName" element={<Slider />} />
        </Routes>
      </main>
      <footer className={css.footer}>
        <div className={css.footerText}>
          2023 @ Made by{' '}
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
