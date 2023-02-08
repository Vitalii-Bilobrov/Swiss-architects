import { Bernardazzi } from 'pages/Bernardazzi/Bernardazzi';
import { Torricelli } from 'pages/Torricelli/Torricelli ';
import { Link, Route, Routes } from 'react-router-dom';
import css from './Home.module.css';
import flag from 'images/flag.jpg';
import Bernardazzi_img from 'images/Bernardazzi.jpg';
import Torricelli_img from 'images/Torricelli.jpg';
export default function Home() {
  return (
    <div>
      <img className={css.flag} src={flag} alt="flag" />
      <h1 className={css.mainTitle}>Швейцарские архитекторы </h1>
      <div className={css.linksBox}>
        <div>
          <Link className={css.item} to="/Bernardazzi">
            {' '}
            <img
              className={css.arch_img}
              src={Bernardazzi_img}
              alt="Bernardazzi_img"
            />
            Бернардацци Александр Иосифович <div>(1831-1907)</div>
          </Link>
        </div>
        <div>
          <Link className={css.item} to="/Torricelli">
            {' '}
            <img
              className={css.arch_img}
              src={Torricelli_img}
              alt="Torricelli_img"
            />
            Торичелли Георгий Иванович <div>(1800-1843)</div>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/Bernardazzi" element={<Bernardazzi />} />

        <Route path="/Torricelli" element={<Torricelli />} />
      </Routes>
    </div>
  );
}
