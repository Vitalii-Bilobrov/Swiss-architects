import { Bernardazzi } from 'pages/BernardazziPage/BernardazziPage';
import { Home } from 'pages/HomePage/HomePage';
import { Slider } from 'pages/SliderPage/SliderPage';
import { Torricelli } from 'pages/TorricelliPage/TorricelliPage';
import { Route, Routes } from 'react-router-dom';
import i18n from 'utils/i18n';

export const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home language={i18n.language} />} />
        <Route
          path="/Bernardazzi"
          element={<Bernardazzi language={i18n.language} />}
        />
        <Route
          path="/Bernardazzi/:projectName"
          element={<Slider language={i18n.language} />}
        />
        <Route
          path="/Torricelli"
          element={<Torricelli language={i18n.language} />}
        />
        <Route
          path="/Torricelli/:projectName"
          element={<Slider language={i18n.language} />}
        />
      </Routes>
    </>
  );
};
