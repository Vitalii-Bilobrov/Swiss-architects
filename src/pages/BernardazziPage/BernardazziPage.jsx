import { Link } from 'react-router-dom';

import Bernardazzi_img from 'images/Bernardazzi.jpg';
import { data1 } from '../../data/data1';

import css from './BernardazziPage.module.css';

export const Bernardazzi = () => {
  const houses = data1.filter(e => e.id === 'Bernardazzi');
  return (
    <>
      <div className="container">
        <div className={css.archSection}>
          <h2 className={css.archName}>
            Бернардацци<br></br> Александр Иосифович
          </h2>
          <div>
            <img
              className={css.arch_img}
              src={Bernardazzi_img}
              alt="Bernardazzi_img"
            />
          </div>
          <div className={css.biographi}>
            <p>
              Александр Бернардацци родился в Пятигорске в 1831 году. Сын
              архитектора Иосифа Карловича Бернардацци, уроженца Швейцарии,
              участника строительства городов КМВ: Пятигорска и Кисловодска.
            </p>
            <br />
            <p>
              Семейство Бернардацци из Памбио (в Тичино) обосновалось на юге
              России при Александре I. В 1843 году определён в младшие классы
              Строительного училища в Петербурге, окончил курс по первому
              разряду со званием архитекторского помощника. С 1850 года назначен
              на младшую техническую должность в Бессарабскую областную
              строительную и дорожную комиссию. Почти 30 лет был городским
              архитектором Кишинёва. С 1875 года — Почётный потомственный
              гражданин. В 1883 году переехал в Одессу, но продолжал
              проектировать и для Бессарабии, позднее работал в Новороссийском
              университете.
            </p>
            <br />
            <p>
              Бернардацци был приверженцем классицизма, затем неоклассицизма, в
              то же время он тяготел к стилизации итальянского ренессанса с
              элементами готики.
            </p>
            <br />
            <p>
              Александр Бернардацци умер в командировке в Фастове под Киевом.
              Согласно завещанию он был похоронен в Кишинёве рядом со своей
              матерью.
            </p>
          </div>
          <h3 className={css.projectListName}>Работы автора:</h3>
          <div className={css.projectListBox}>
            <ul className={css.projectList}>
              {houses.map(house => (
                <li className={css.projectName} key={house.projectName}>
                  <Link to={`/Bernardazzi/${house.projectName}`}>
                    <div className={css.projectNameItem}>
                      {house.projectName}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
