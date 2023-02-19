import { Link, Route, Routes } from 'react-router-dom';

import { Bernardazzi } from 'pages/BernardazziPage/BernardazziPage';
import { Torricelli } from 'pages/TorricelliPage/TorricelliPage';

import flag from 'images/flag.jpg';
import Bernardazzi_img from 'images/Bernardazzi.jpg';
import Torricelli_img from 'images/Torricelli.jpg';

import css from './HomePage.module.css';

export function Home() {
  return (
    <div className={css.box}>
      <div className={css.container}>
        <div className={css.homeContainer}>
          <div className={css.flagBox}>
            <img className={css.flag} src={flag} alt="flag" />
          </div>
          <h1 className={css.mainTitle}>Швейцарские архитекторы </h1>
        </div>
        <div className={css.linksBox}>
          <div>
            <Link className={css.item} to="/Bernardazzi">
              <div className={css.arcBox}>
                <img
                  className={css.arch_img}
                  src={Bernardazzi_img}
                  alt="Bernardazzi_img"
                />
              </div>
              <p>
                Бернардацци <br /> Александр Иосифович <span>(1831-1907)</span>
              </p>
            </Link>
          </div>
          <div>
            <Link className={css.item} to="/Torricelli">
              <div className={css.arcBox}>
                <img
                  className={css.arch_img}
                  src={Torricelli_img}
                  alt="Torricelli_img"
                />
              </div>
              <p>
                Торичелли <br /> Георгий Иванович <span>(1800-1843)</span>
              </p>
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/Bernardazzi" element={<Bernardazzi />} />

          <Route path="/Torricelli" element={<Torricelli />} />
        </Routes>
      </div>
    </div>
  );
}
