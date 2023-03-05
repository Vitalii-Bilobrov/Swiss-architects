import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Logo from 'images/swiss.svg';

import css from './Layout.module.css';
import { Navigation } from '../Navigation/Navigation';

export const Layout = () => {
  const [active, setActive] = useState(
    localStorage.getItem('activeLink') || ''
  );

  useEffect(() => {
    const activeLinkId = localStorage.getItem('activeLink');
    if (activeLinkId) {
      setActive(activeLinkId);
    }
  }, []);

  const { t, i18n } = useTranslation();
  const changeLanguage = (language, id) => {
    i18n.changeLanguage(language);
    setActive(id);
    localStorage.setItem('activeLink', id);
  };

  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <nav className={css.nav}>
          <Link to="/" end>
            <img className={css.navLogo} src={Logo} alt="Logo" />
          </Link>
          <Link className={`${css.navlink} ${css.linkHover}`} to="/Bernardazzi">
            {t('Bernardazzi')}
          </Link>
          <Link className={`${css.navlink} ${css.linkHover}`} to="/Torricelli">
            {t('Torricelli')}
          </Link>
          <div className={css.buttonLangBox}>
            <button
              className={`${css.buttonLang} ${
                active === 'link1' ? css.active : ''
              }`}
              onClick={() => changeLanguage('en', 'link1')}
            >
              EN
            </button>
            <button
              className={`${css.buttonLang} ${
                active === 'link2' ? css.active : ''
              }`}
              onClick={() => changeLanguage('ua', 'link2')}
            >
              UA
            </button>
            <button
              className={`${css.buttonLang} ${
                active === 'link3' ? css.active : ''
              }`}
              onClick={() => changeLanguage('de', 'link3')}
            >
              DE
            </button>
          </div>
        </nav>
      </header>
      <main className={css.content}>
        <Navigation />
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
