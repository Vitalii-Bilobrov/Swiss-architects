import { data1 } from 'components/data/data1';
import { Link } from 'react-router-dom';
import css from './Torricelli.module.css';
import Torricelli_img from 'images/Torricelli.jpg';

export const Torricelli = () => {
  const houses = data1.filter(e => e.id === 'Torricelli');
  return (
    <>
      <div className="container">
        <div className={css.archSection}>
          <h2 className={css.archName}>
            Торичелли<br></br> Георгий Иванович
          </h2>
          <div>
            <img
              className={css.arch_img}
              src={Torricelli_img}
              alt="Torricelli_img"
            />
          </div>
          <div className={css.biographi}>
            <p>
              В 1826 году, получив образование, приехал из Лугано (Швейцария) в
              Одессу, где его отец Джованни Торичелли работает как художник.
              Проработал в Одессе 17 следующих лет своей жизни. Выполнил
              совместно с Ф. К. Боффо архитектурный план Одессы (1826). В 1832
              году стал победителем конкурса проектов строительства купеческой
              биржи (ныне — Одесский горсовет) на Приморском бульваре.
              Строительство было завершено в 1834 году вблизи формировавшегося с
              1820-х годов торгового центра города — Старобазарной площади. В
              возведенном центральном корпусе с башней, четырёх угловых
              павильонах и навесах ощущаются мотивы городской архитектуры
              Северной Италии. Фасады выстроенных по периметру рынка лавок были
              объединены колоннадой по вторым этажам (в значительной мере этот
              архитектурный ансамбль ныне утрачен). Выполнил проект Биржевой
              (ныне — Думской) площади (1835) году и Театральной площади с
              Английским клубом (ныне — музей морского флота по улице
              Ланжероновской, 6), (1842). Считается, что бело-голубая расцветка
              клуба связана с цветами известного английского фарфора фирмы
              Веджвуд. Архитектор удачно вписал здание в рельеф крутого спуска:
              фасад, выходящий в сквер Оперного театра, одноэтажный, а
              обращённый к Думской площади имеет высокий цоколь и бельэтаж. По
              внутренней отделке выделяется белый зал, выполненный в
              классическом стиле. Выполнил строительство торгового комплекса —
              44 лавки «Пале-Рояля» (в сквере Пале-Рояль), выходящие аркадами на
              улицы Ланжероновскую, Екатерининскую и Театральный (Чайковского)
              переулок, это строительство после смерти Торричелли было завершено
              архитектором К. О. Даллаква[1]. По проекту Торричелли построен
              Сабанеев мост (1828—1836). В 1837 году по просьбе графа М. С.
              Воронцова выполнил проект Архангело-Михайловского собора, две
              развернутые колоннады которого напоминали Казанский собор в
              Петербурге. Автор проектов жилых домов на улицах Толстого, 19
              (1835), Нежинской, 64 (1836), Дерибасовской, 27 (1837, собственный
              дом архитектора), Екатерининской, 3 (1835), Греческой, 33 (1840),
              Дерибасовской, 19 (1842). Одним из лучших считается дом на углу
              улиц Нежинской и Тираспольской (1834), планировочное решение
              которого восходит к итальянским городским палаццо.
            </p>
            <p>
              Вероятной причиной ранней смерти архитектора считают болезнь
              Боткина, малоизвестную медицине того времени.
            </p>
          </div>
          <h3 className={css.projectListName}>Работы автора:</h3>
          <div className={css.projectListBox}>
            <ul className={css.projectList}>
              {houses.map(house => (
                <li className={css.projectName} key={house.projectName}>
                  <Link to={`/Torricelli/${house.projectName}`}>
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
