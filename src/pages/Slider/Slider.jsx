import { useParams } from 'react-router-dom';
import React from 'react';
import { nanoid } from 'nanoid';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { data1 } from '../../components/data/data1';
import css from './Slider.module.css';

import './styles.css';
import { Pagination } from 'swiper';

export default function Slider() {
  const { projectName } = useParams();
  const house = data1.find(e => e.projectName === projectName);
  return (
    <>
      <div className={css.container}></div>
      <div className={css.sliderBody}>
        <h2 className={css.projectName}>{house.author}</h2>
        <h3 className={css.projectName}>{projectName}</h3>
        <div className={css.container}>
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {house.photos.map(photo => (
              <SwiperSlide key={nanoid()}>
                <img className={css.photo} src={photo} alt="fff" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={css.projectText}>{house.text}</div>
      </div>
    </>
  );
}
