import { Bernardazzi } from 'pages/Bernardazzi';
import Torricelli from 'pages/Torricelli ';
import Home from 'pages/Home';
import { Link, Route, Routes } from 'react-router-dom';
import Slider from 'pages/Slider';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/" end>
            Главная
          </Link>
          <Link to="/Bernardazzi">Бернардацци</Link>
          <Link to="/Torricelli">Торичелли</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bernardazzi" element={<Bernardazzi />} />
        <Route path="/Bernardazzi/:projectName" element={<Slider />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/Torricelli " element={<Torricelli />} />
      </Routes>
      <footer>
        <div>
          2021 @ Made by <a href="https://starter.ooo/">Starter</a>
        </div>
      </footer>
    </div>
  );
};
