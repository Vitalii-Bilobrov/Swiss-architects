import { useParams } from 'react-router-dom';
import React from 'react';
import { nanoid } from 'nanoid';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { data1 } from '../components/data/data';

import './styles.css';
import { Navigation } from 'swiper';

export default function Slider() {
  const { projectName } = useParams();

  const house = data1.filter(e => e.projectName === projectName);

  return (
    <>
      <h3>{projectName}</h3>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {house[0].photos.map(photo => (
          <SwiperSlide key={nanoid()}>
            <img src={photo} alt="fff" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>{house[0].text}</div>
    </>
  );
}
