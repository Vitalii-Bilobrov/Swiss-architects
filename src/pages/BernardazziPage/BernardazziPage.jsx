import { Link } from 'react-router-dom';

import Bernardazzi_img from 'images/Bernardazzi.jpg';
import { data1 } from '../../data/data1';

import css from './BernardazziPage.module.css';
import { useTranslation } from 'react-i18next';

export const Bernardazzi = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };
  const houses = data1.filter(e => e.id === 'Bernardazzi');
  return (
    <>
      <div className="container">
        <div className={css.archSection}>
          <h2 className={css.archName}>
            {t('Bernardazzi')}
            <br></br> {t('Alexandr')}
          </h2>
          <div>
            <img
              className={css.arch_img}
              src={Bernardazzi_img}
              alt="Bernardazzi_img"
            />
          </div>
          <div className={css.biographi}>{t('BoigraphiB')}</div>
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
