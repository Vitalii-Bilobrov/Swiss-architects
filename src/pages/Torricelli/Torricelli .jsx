import { data1 } from 'components/data/data1';
import { Link } from 'react-router-dom';
import css from './Torricelli.module.css';

export const Torricelli = () => {
  const houses = data1.filter(e => e.id === 'Torricelli');
  return (
    <main>
      <h2 className={css.archName}>Торичелли</h2>
      <div className={css.projectListBox}>
        <ul className={css.projectList}>
          {houses.map(house => (
            <li className={css.projectName} key={house.projectName}>
              <Link to={`/Torricelli/${house.projectName}`}>
                <div>{house.projectName}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
