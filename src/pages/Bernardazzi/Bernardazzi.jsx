import { data1 } from 'components/data/data1';
import { Link } from 'react-router-dom';
import css from './Bernardazzi.module.css';

export const Bernardazzi = ({ setSelectedArchitect }) => {
  const houses = data1.filter(e => e.id === 'Bernardazzi');
  return (
    <main>
      <h2 className={css.archName}>Бернардацци</h2>
      <div className={css.projectListBox}>
        <ul className={css.projectList}>
          {houses.map(house => (
            <li className={css.projectName} key={house.projectName}>
              <Link to={`/Bernardazzi/${house.projectName}`}>
                <div>{house.projectName}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
