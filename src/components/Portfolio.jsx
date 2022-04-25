
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
const Portfolio = () => {
  return (
    <div className="portfolio">
        <span>recent Projects</span>
        <span>portfolio</span>
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
      <SwiperSlide><img src="image/sidebar.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="image/ecommerce.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="image/musicapp.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="image/hoc.png" alt="" /></SwiperSlide>
      
     
      ...
    </Swiper>
    </div>
  )
}

export default Portfolio