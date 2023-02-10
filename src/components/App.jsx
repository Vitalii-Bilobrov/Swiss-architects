import { Bernardazzi } from 'pages/Bernardazzi/Bernardazzi';
import { Torricelli } from 'pages/Torricelli/Torricelli ';
import Home from 'pages/Home/Home';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import Slider from 'pages/Slider/Slider';
import { data1 } from './data/data1';
import { useState } from 'react';
import css from './App.module.css';
import Logo from 'images/swiss.svg';

export const App = () => {
  const { projectName } = useParams();
  const [selectedArchitect, setSelectedArchitect] = useState(
    data1.find(architect => architect.id === projectName) || data1[0]
  );
  return (
    <>
      <div className={css.wrapper}>
        <header className={css.header}>
          <nav className={css.nav}>
            <Link to="/" end>
              <img className={css.navLogo} src={Logo} alt="Logo" />
            </Link>
            <Link
              className={css.navlink}
              onClick={() => setSelectedArchitect('Bernardazzi')}
              to="/Bernardazzi"
            >
              Бернардацци
            </Link>
            <Link
              className={css.navlink}
              onClick={() => setSelectedArchitect('Torricelli')}
              to="/Torricelli"
            >
              Торичелли
            </Link>
          </nav>
        </header>
        <body className={css.content}>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route
              path="/Bernardazzi"
              element={<Bernardazzi selectedArchitect={selectedArchitect} />}
            />
            <Route path="/Bernardazzi/:projectName" element={<Slider />} />
            <Route path="/Torricelli/:projectName" element={<Slider />} />
            {/* <Route path="*" element={<NotFound />} /> */}
            <Route path="/Torricelli" element={<Torricelli />} />
          </Routes>
          <div className={css.push}></div>
        </body>
      </div>
      <footer className={css.footer}>
        <div className={css.footerText}>
          2023 @ Made by{' '}
          <a className={css.navlink} href="https://starter.ooo/">
            Starter
          </a>
        </div>
      </footer>
    </>
  );
};
