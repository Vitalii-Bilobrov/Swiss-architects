import { Link } from 'react-router-dom';
import css from './TorricelliPage.module.css';
import Torricelli_img from 'images/Torricelli.jpg';
import { data1 } from 'data/data1';
import { useTranslation } from 'react-i18next';

export const Torricelli = ({ language }) => {
  const { t } = useTranslation();

  const houses = data1.filter(e => e.id === 'Torricelli');
  return (
    <>
      <div className="container">
        <div className={css.archSection}>
          <h2 className={css.archName}>
            {t('Torricelli')}
            <br></br> {t('Georgiy')}
          </h2>
          <div>
            <img
              className={css.arch_img}
              src={Torricelli_img}
              alt="Torricelli_img"
            />
          </div>
          <div className={css.biographi}>{t('BoigraphiT')}</div>;
          <h3 className={css.projectListName}>{t('FamousProjects')}</h3>
          <div className={css.projectListBox}>
            <ul className={css.projectList}>
              {houses.map(house => (
                <li className={css.projectName} key={house.projectNameEnglish}>
                  <Link to={`/Torricelli/${house.projectNameEnglish}`}>
                    <div className={css.projectNameItem}>
                      {language === 'de'
                        ? house.projectNameDeutsch
                        : language === 'en'
                        ? house.projectNameEnglish
                        : language === 'ua'
                        ? house.projectNameUkrainian
                        : ''}
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
