import { data1 } from 'components/data/data1';
import { Link } from 'react-router-dom';
var path = window.location.pathname;
var page = path.split('/').pop();
console.log(page);

export const ProjectList = () => {
  const houses = data1.filter(e => e.id === page);

  return (
    <div>
      <ul>
        {houses.map(house => (
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
