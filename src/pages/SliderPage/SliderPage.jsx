import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { data1 } from '../../data/data1';

import css from './SliderPage.module.css';

import './styles.css';
import { Pagination } from 'swiper';
import { ModalComponent } from './ModalComponants';

export function Slider({ language }) {
  const { projectNameEnglish } = useParams();
  const house = data1.find(e => e.projectNameEnglish === projectNameEnglish);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const screenWidth = window.screen.width;

  const handleImageClick = photo => {
    if (screenWidth > 1200) {
      setSelectedImage(photo);
      setModalIsOpen(true);
    }
  };

  return (
    <>
      <div className="container">
        <div className={css.sliderBody}>
          <h2 className={css.projectAuthor}>
            {language === 'ru'
              ? house.author
              : language === 'en'
              ? house.authorEnglish
              : language === 'ua'
              ? house.authorUkrainian
              : ''}
          </h2>
          <h3 className={css.projectName}>
            {language === 'ru'
              ? house.projectName
              : language === 'en'
              ? house.projectNameEnglish
              : language === 'ua'
              ? house.projectNameUkrainian
              : ''}
          </h3>

          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {house.photos.map(photo => (
              <SwiperSlide key={nanoid()}>
                <img
                  className={css.photo}
                  src={photo}
                  alt="house"
                  onClick={() => handleImageClick(photo)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <ModalComponent
            id="myModal"
            image={selectedImage}
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
          />
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
