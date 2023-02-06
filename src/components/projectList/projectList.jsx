import { data1 } from 'components/data/data';
import { Link } from 'react-router-dom';

export const ProjectList = () => {
  return (
    <div>
      <ul>
        {data1.map(house => (
          <li key={house.projectName}>
            <Link to={`${house.projectName}`}>
              <div>{house.projectName}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
