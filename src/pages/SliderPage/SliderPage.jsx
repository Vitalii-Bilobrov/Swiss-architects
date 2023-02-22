import { useParams } from 'react-router-dom';
import React from 'react';
import { nanoid } from 'nanoid';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { data1 } from '../../data/data1';

import css from './SliderPage.module.css';

import './styles.css';
import { Pagination } from 'swiper';

export function Slider({ language }) {
  const { projectName } = useParams();
  const house = data1.find(e => e.projectName === projectName);
  // console.log(language);
  return (
    <>
      <div className="container">
        <div className={css.sliderBody}>
          <h2 className={css.projectAuthor}>{house.author}</h2>
          <h3 className={css.projectName}>{projectName}</h3>

          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {house.photos.map(photo => (
              <SwiperSlide key={nanoid()}>
                <img className={css.photo} src={photo} alt="house" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={css.projectText}>
          {language === 'ru'
            ? house.text
            : language === 'en'
            ? house.textEnglish
            : language === 'ua'
            ? house.textUkrainian
            : ''}
        </div>
      </div>
    </>
  );
}
